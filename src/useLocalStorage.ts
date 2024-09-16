// types
import { useState } from "react";

// types
import { IStorageValue, IUseLocalStorage } from "./types";

export const useLocalStorage: IUseLocalStorage = (token: string) => {
  const [storageValue, setStorageValue] = useState<IStorageValue>(token);

  const setItem = (storageValue: IStorageValue) => {
    setStorageValue(storageValue);
  };

  const removeItem = () => {
    setStorageValue(null);
  };

  return [
    storageValue,
    {
      setItem,
      removeItem,
    },
  ];
};
