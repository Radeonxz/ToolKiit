import { Reducer, Action } from "redux";
import { StoreState } from "./";

const initialState: StoreState = {
  bill: 0,
  percentage: 0,
  split: 1,
};

export const rootReducer: Reducer<StoreState, Action> = (
  state = initialState,
  action,
) => state;
