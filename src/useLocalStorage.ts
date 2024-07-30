// types
import { useState } from "react";
import { ReturnValue } from "./types";

export default function useLocalStorage(token: string) {
  const [tokenItem, setTokenItem] = useState(token);

  const setItem = (newToken: string) => {
    setTokenItem(newToken);
  };

  const removeItem = () => {
    setTokenItem("");
  };

  return [
    tokenItem,
    {
      setItem,
      removeItem,
    },
  ] as ReturnValue;
}
