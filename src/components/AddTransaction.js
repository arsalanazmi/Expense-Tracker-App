import React, { useState, useContext } from "react";
import uuid from "react-uuid";

// Import Global State
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      description,
      transactionAmount: +transactionAmount, //converting string into number
    };
    addTransaction(newTransaction);
    setDescription("");
    setTransactionAmount(0);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Add New Transaction</h2>
      <hr className="line" />

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Detail of Transaction..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Transaction Amount</label>
          <input
            type="number"
            className="form-control"
            id="transactionamount"
            value={transactionAmount}
            onChange={(e) => {
              setTransactionAmount(e.target.value);
            }}
            placeholder="Enter Transaction Amount..."
            required
          />
          <small className="form-text details">
            Amount
            <br />
            (negative - expense, positive - income).
          </small>
        </div>

        <button type="submit" className="btn btn-dark add">
          Add Transaction
        </button>
      </form>
    </div>
  );
};