import React, { createContext, useReducer } from 'react';
import TransactionsReducer from './transactionReducer';

let initialTransactions = []

export const TransactionsContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionsReducer, initialTransactions);

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