import { createContext, useState } from "react";


const TransactionContext = createContext();

export const TransactionProvider = {(children) => }
const [ transaction, setTransactions] = useState([
    {
        id:1
        text:"i am from context",
        amount: 9999
    }
])