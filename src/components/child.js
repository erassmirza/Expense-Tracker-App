import React, { useContext, useState } from 'react';
import { TransactionsContext } from './transactionContext';

const Child = () => {

    let {transactions,addTransaction} = useContext(TransactionsContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    
    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount)===0) {
            alert("Kindly Enter Ammount")
            return false;
        }
        addTransaction(
            {
                amount: Number(newAmount),
                desc: newDesc
            }
        )
        setDesc("");
        setAmount(0);
    }

    const getIncome = () => {
        let income = 0;
        for(var i = 0; i < transactions.length; i++) {
            if(transactions[i].amount > 0) {
                income += transactions[i].amount
            }
        }
        return income;
    } 
    const getExpense = () => {
        let expense = 0;
        for(var i = 0; i < transactions.length; i++) {
            if(transactions[i].amount < 0) {
                expense += transactions[i].amount
            }
        }
        return expense;
    }

    return (
        <div>
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> ${getIncome() + getExpense()} </h3>

            <div className="expense-container">
                <h3 className="text-center">INCOME <br /> ${getIncome()} </h3>
                <h3 className="text-center">EXPENSE <br /> ${getExpense()} </h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">

                {transactions.map(
                    (transObj, index) => {
                        return (
                            <li key={index}>
                                <span>{transObj.desc}</span>
                                <span>${transObj.amount}</span>
                            </li>
                        )
                    }
                )}

            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Text <br />
                    <input type="text" onChange={ (e) => setDesc(e.target.value) } value={newDesc} placeholder="Description" required /> <br />
                </label>

                <label>
                    Amount <br /> negative-expense, positive-income <br />
                    <input type="number" onChange={ (e) => setAmount(e.target.value) } value={newAmount} placeholder="Amount" required />
                </label>
                <br />
                <input className="text-center, input-button" type="submit" value="Add Transaction" />
            </form>

        </div>
    )
}

export default Child;