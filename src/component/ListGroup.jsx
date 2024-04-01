import React from 'react'
import ListItem from './ListItem';


const ListGroup = ({ transactions, deleteTransaction, editTransaction }) => {
    if (transactions.length === 0) {
        return (
            <div className="my-3">
              <h1 className="text-secondary text-center">No Transactions Yet</h1>
            </div>
          );
        }
      
    return (
      <div className="my-3">
        <h3 className="text-secondary">All Transactions : </h3>
        <ul className="my-3 list-group">
          {transactions.map((transaction) => (
            <ListItem
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
              editTransaction={editTransaction}
            />
          ))}
        </ul>
      </div>
    );
  };

export default ListGroup;