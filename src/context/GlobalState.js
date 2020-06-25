import React, { createContext, useReducer } from "react";

// Import the Reducer
import AppReducer from "./AppReducer";

// Create Initial State
const initialState = {
  transactions: []
};

// Create Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider For Global Context
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions For Transactions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function clearTransactions(transactions) {
    dispatch({
      type: "CLEAR_ALL_TRANSACTION",
      payload: transactions,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        clearTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};