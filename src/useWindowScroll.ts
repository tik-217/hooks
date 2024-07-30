import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

interface IUseWindowScroll {
  x: 0;
  y: 0;
}

type IUseWindowScrollTo = (coord: Partial<IUseWindowScroll>) => void;

export default function useWindowScroll() {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });

  useWindowEvent(
    "scroll",
    () => {
      setScroll({ x: window.scrollX, y: window.scrollY });
    },
    {}
  );

  function scrollTo(coord: Partial<IUseWindowScroll>) {
    window.scrollTo({
      top: coord.y,
      behavior: "smooth",
    });
  }

  return [scroll, scrollTo] as [IUseWindowScroll, IUseWindowScrollTo];
}
