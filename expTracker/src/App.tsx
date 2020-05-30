import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import NewTransaction from "./components/NewTransaction";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <NewTransaction />
      </div>
    </>
  );
};

export default App;
