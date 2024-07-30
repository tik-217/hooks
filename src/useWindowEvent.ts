import { useEffect } from "react";

export default function useWindowEvent(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}
