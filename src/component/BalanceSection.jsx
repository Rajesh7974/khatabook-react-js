import React from 'react'

const BalanceSection = ({transactions}) => {
    const balance = transactions.reduce((p, c) => {
        return p + c.amount;
      }, 0);
    
      const income = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((p, c) => {
          return p + c.amount;
        }, 0);
    
      const expense = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((p, c) => {
          return p + c.amount;
        }, 0);


  return (
    
    <div className="my-3 row g-3">
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card bg-primary p-3 rounded-0">
        <h1 className="text-light">Total Income : </h1>
        <h1 className="text-light">{income}</h1>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card bg-danger p-3 rounded-0">
        <h1 className="text-light">Total Expense : </h1>
        <h1 className="text-light">{expense}</h1>
      </div>
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12">
      <div className="card bg-warning p-3 rounded-0">
        <h1 className="text-light">Total Bal : </h1>
        <h1 className="text-light">{balance}</h1>
      </div>
    </div>
  </div>

  );
};

export default BalanceSection;