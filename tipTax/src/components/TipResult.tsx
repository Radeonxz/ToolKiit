import * as React from "react";
import { useSelector } from "react-redux";
import { selectTotal, selectTip, selectPerPerson } from "../store/selectors";

export const TipResult = () => {
  const total = useSelector(selectTotal);
  const tip = useSelector(selectTip);
  const perPerson = useSelector(selectPerPerson);

  return (
    <div>
      <div>Bill Total: {total}</div>
      <div>Tip: {tip}</div>
      <div>Per Person: {perPerson}</div>
    </div>
  );
};
