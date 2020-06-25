import React, { useContext } from "react";

// import Transaction Component
import { Transactions } from "./Transactions";

// import Global State
import { GlobalContext } from "../context/GlobalState";

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  const { clearTransactions } = useContext(GlobalContext);

  const displayDiv = transactions.length === 0 ? "none" : "flex";

  const displayButton = transactions.length === 0 ? "none" : "block";

  const clearAll = () => {
    const clear = {
      transactions: [],
    };
    clearTransactions(clear);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>History</h2>
      <hr className="line" />

      <div
        style={{
          display: displayDiv,
          justifyContent: "space-between",
          padding: "0 20px 0 12px",
          marginBottom: "-12px",
        }}
      >
        <div>
          <p>
            <b>Items</b>
          </p>
        </div>

        <div>
          <p>
            <b>Amount</b>
          </p>
        </div>
      </div>

      <ul className="list">
        {transactions.map((transaction) => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}

        <button
          type="button"
          className="btn btn-dark clear"
          style={{ display: displayButton }}
          onClick={() => clearAll(transactions)}
        >
          Clear All Transactions
        </button>
      </ul>
    </div>
  );
};