import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ActionTypes } from "../store/actions";
import {
  selectBill,
  selectPercentage,
  selectPerPerson,
  selectTotal,
  selectSplit,
  selectTip,
} from "../store/selectors";

export const TipCalculator = () => {
  const bill = useSelector(selectBill);
  const percentage = useSelector(selectPercentage);
  const split = useSelector(selectSplit);
  const total = useSelector(selectTotal);
  const perPerson = useSelector(selectPerPerson);
  const tip = useSelector(selectTip);

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

      <div>Bill Total: {total}</div>
      <div>Tip: {tip}</div>
      <div>Per Person: {perPerson}</div>
    </div>
  );
};
