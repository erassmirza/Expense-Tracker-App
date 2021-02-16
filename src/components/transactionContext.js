import React, { createContext, useReducer } from 'react';
import TransactionsReducer from './transactionReducer';

let initialtTransactions = [
    { amount: 100, desc: "Cash" },
    { amount: -20, desc: "Book" },
    { amount: -200, desc: "Camera" }
]

export const TransactionsContext = createContext(initialtTransactions);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionsReducer, initialtTransactions);

    function addTransaction(transObj) {
        dispatch(
            {
                type: "Add",
                payload: {
                    amount: transObj.amount,
                    desc: transObj.desc
                },

            }
        )
    }

    return (
        <TransactionsContext.Provider value={
            {
                transactions: state,
                addTransaction
            }
        }>
            {children}
        </TransactionsContext.Provider>
    )
}