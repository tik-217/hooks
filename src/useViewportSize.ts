import { useEffect, useState } from "react";
import useWindowEvent from "./useWindowEvent";

export default function useViewportSize() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  useWindowEvent(
    "resize",
    (e) => {
      setHeight((e.target as Window).innerHeight);
      setWidth((e.target as Window).innerWidth);
    },
    {}
  );

  return { height, width };
}
