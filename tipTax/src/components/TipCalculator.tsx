import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { StoreState } from "../store";
import { ActionTypes } from "../store/actions";

export const TipCalculator = () => {
  const bill = useSelector((state: StoreState) => state.bill);
  const percentage = useSelector((state: StoreState) => state.percentage);
  const split = useSelector((state: StoreState) => state.split);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>Bill: </span>
        <input
          value={bill}
          onChange={e =>
            dispatch({
              type: ActionTypes.BillChange,
              payload: e.target.value,
            })
          }
        />
      </div>
      <div>
        <span>Tip %: </span>
        <input
          value={percentage}
          onChange={e =>
            dispatch({
              type: ActionTypes.PercentageChange,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div>
        <span>Split</span>
        <button onClick={() => dispatch({ type: ActionTypes.SplitIncrement })}>
          +
        </button>
        <span>{split}</span>
        <button onClick={() => dispatch({ type: ActionTypes.SplitDecrement })}>
          -
        </button>
      </div>
      <button onClick={() => dispatch({ type: ActionTypes.Reset })}>
        RESET
      </button>
    </div>
  );
};
