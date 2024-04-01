import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import BalanceSection from "./component/BalanceSection";
import ListGroup from "./component/ListGroup";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  // Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  //  Add transaction
  const addTransaction = (text, amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount: parseInt(amount),
    };

    console.log(newTransaction);

    setTransactions([newTransaction, ...transactions]);
  };

  // Edit Transactions

  const editTransaction = (transaction) => {
    setEdit({
      transaction: transaction,
      isEdit: true,
    });
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((item) =>
        item.id === updatedTransaction.id ? updatedTransaction : item
      )
    );
    setEdit({
      transaction: {},
      isEdit: false,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container px-3 py-5">
        <BalanceSection transactions={transactions} />
        <Form
          addTransaction={addTransaction}
          edit={edit}
          updateTransaction={updateTransaction}
        />
        <ListGroup
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
        />
      </div>
    </>
  );
};

export default App;
