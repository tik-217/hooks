import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const currElem = ref.current;

    currElem?.addEventListener("mouseenter", () => {
      setHovered(true);
    });

    currElem?.addEventListener("mouseout", () => {
      setHovered(false);
    });

    return () => {
      currElem?.removeEventListener("mouseenter", () => {});
      currElem?.removeEventListener("mouseout", () => {});
    };
  }, []);

  return { hovered, ref };
};
