import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { AccountSummary } from "./components/AccountSummary";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";
import { Footer } from "./components/Footer";

// Import Provider
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Header />
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
