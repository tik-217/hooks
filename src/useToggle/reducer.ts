import { ADD_NEW_VALUE, CHANGE_CURR_INDEX } from "./actions";
import { IActionReducer, IState } from "../types";

export function reducerSwitcher(state: IState, action: IActionReducer) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_CURR_INDEX:
      if (typeof payload === "number") {
        return {
          ...state,
          value: state.allValues[payload],
        };
      }
      return state;
    case ADD_NEW_VALUE:
      if (typeof payload === "string") {
        return {
          ...state,
          allValues: [...state.allValues, payload],
          value: payload,
        };
      }
      return state;
    default:
      return state;
  }
}
