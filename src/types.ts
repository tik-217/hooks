export type ReturnValue = [
  value: string | null,
  {
    setItem: (value: string) => void;
    removeItem: () => void;
  }
];

export type UseLocalStorage = (key: string) => ReturnValue;
