import React, { useContext } from "react";

// import the Global State
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const balance = transactionAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <hr className="line" />
      <h2 id="balance-amount">Rs. {balance}</h2>
    </div>
  );
};