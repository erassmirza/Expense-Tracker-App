import React, { useContext } from 'react';
import { TransactionsContext } from './transactionContext';

const Child = () => {

    let {transactions} = useContext(TransactionsContext)

    return (
        <div>
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> $260.00 </h3>

            <div className="expense-container">
                <h3 className="text-center">INCOME <br /> $500.00 </h3>
                <h3 className="text-center">EXPENSE <br /> $240.00 </h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">

                {transactions.map(
                    (transaction, ind) => {
                        return (
                            <li key={ind}>
                                <span>{transaction.desc}</span>
                                <span>{transaction.amount}</span>
                            </li>
                        )
                    }
                )}

            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form">
                <label>
                    Text <br />
                    <input type="text" placeholder="Enter text.." required /> <br />
                </label>

                <label>
                    Amount <br /> negative-expense, positive-income <br />
                    <input type="number" placeholder="Enter amount.." required />
                </label>
                <br />
                <input className="text-center, input-button" type="submit" value="Add Transaction" />
            </form>

        </div>
    )
}

export default Child;