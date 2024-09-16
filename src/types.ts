// export type ReturnValue = [
//   value: string | null,
//   {
//     setItem: (value: string) => void;
//     removeItem: () => void;
//   }
// ];

// export type UseLocalStorage = (key: string) => ReturnValue;

export type IStorageValue = string | null;

export type IUseLocalStorage = (storageKey: string) => [
  storageValue: IStorageValue,
  {
    setItem: (storageValue: IStorageValue) => void;
    removeItem: () => void;
  }
];
