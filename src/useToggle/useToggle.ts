import { useReducer } from "react";
import { IUseToggleOutSwitcher, IUseToggleOutValue } from "../types";
import { reducerSwitcher } from "./reducer";
import { ADD_NEW_VALUE, CHANGE_CURR_INDEX } from "./actions";

export default function useToggle(arrayOfStates: string[]) {
  const initialState = {
    value: arrayOfStates[0],
    allValues: arrayOfStates,
  };

  const [state, dispatch] = useReducer(reducerSwitcher, initialState);

  function switchToNextValue() {
    const maxLengthOfListValues = state.allValues.length;

    let changedCurrIndex = 0;
    const indexOfCurrValue = state.allValues.indexOf(state.value);

    if (indexOfCurrValue < maxLengthOfListValues - 1) {
      changedCurrIndex = indexOfCurrValue + 1;
    } else {
      changedCurrIndex = 0;
    }

    dispatch({
      type: CHANGE_CURR_INDEX,
      payload: changedCurrIndex,
    });
  }

  function switchToDefiniteValue(newValue: string) {
    const findValueIndex = state.allValues.indexOf(newValue);

    if (findValueIndex >= 0) {
      dispatch({
        type: CHANGE_CURR_INDEX,
        payload: findValueIndex,
      });
    } else {
      dispatch({
        type: ADD_NEW_VALUE,
        payload: newValue,
      });
    }
  }

  function toggle(newValue?: string) {
    if (newValue !== undefined) {
      switchToDefiniteValue(newValue);
    } else {
      switchToNextValue();
    }
  }

  return [state.value, toggle] as [IUseToggleOutValue, IUseToggleOutSwitcher];
}
