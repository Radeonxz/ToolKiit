import React from "react";

interface Props {
  transaction: {
    text: string;
    amount: number;
  };
}

const Transaction = ({ transaction }: Props) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
