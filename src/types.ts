export interface IState {
  value: string;
  allValues: string[];
}

export interface IActionReducer {
  type: string;
  payload?: string | number;
}

export type IUseToggleOutValue = string;
export type IUseToggleOutSwitcher = (newValue?: string) => void;
