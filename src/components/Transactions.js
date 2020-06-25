import React, { useContext } from "react";

// import Global State
import { GlobalContext } from "../context/GlobalState"

export const Transactions = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.transactionAmount > 0 ? "+" : "-";
  const transactionType = transaction.transactionAmount > 0 ? "plus" : "minus";

  
  return (
    <div>
      <li className={transactionType}>
        {transaction.description}
        <span>
          {sign}
          {Math.abs(transaction.transactionAmount)} PKR
        </span>
        <button className="btn btn-danger delete" onClick={() => deleteTransaction(transaction.id)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </li>
    </div>
  );
};