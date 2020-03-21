import * as React from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../store/actions";
import { TipInput } from "./TipInput";
import { TipResult } from "./TipResult";

export const TipCalculator = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <TipInput />
      <button onClick={() => dispatch({ type: ActionTypes.Reset })}>
        RESET
      </button>
      <TipResult />
    </div>
  );
};
