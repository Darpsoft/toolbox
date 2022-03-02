import { Dispatch, SetStateAction, useReducer } from "react";

export function useReducerCustom<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<Partial<S>>>] {
  function reducer(state: Partial<S>, action: any) {
    switch (typeof action) {
      case "function":
        return { ...state, ...action(state) };
      default:
        return { ...state, ...action };
    }
  }
  return useReducer(reducer, initialState);
}
