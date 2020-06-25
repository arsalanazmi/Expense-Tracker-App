import React, { useContext } from "react";

// import the Global State
import { GlobalContext } from "../context/GlobalState";

export const AccountSummary = () => {
  const { transactions } = useContext(GlobalContext);

  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const income = transactionAmounts
    .filter((transaction) => transaction > 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2);

  const expense = Math.abs(
    transactionAmounts
      .filter((transactions) => transactions < 0)
      .reduce((acc, transaction) => (acc += transaction), 0)
  ).toFixed(2);

  return (
    <div className="account_summary">
      <div className="line-break">
        <h4>INCOME</h4>
        <p className="income">
          <b>Rs. {income}</b>
        </p>
      </div>

      <div>
        <h4>EXPENSE</h4>
        <p className="expense">
          <b>Rs. {expense}</b>
        </p>
      </div>
    </div>
  );
};