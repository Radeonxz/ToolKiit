import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "../store/actions";
import { selectBill, selectPercentage, selectSplit } from "../store/selectors";

export const TipInput = () => {
  const bill = useSelector(selectBill);
  const percentage = useSelector(selectPercentage);
  const split = useSelector(selectSplit);

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
    </div>
  );
};
