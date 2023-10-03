import React, { useState } from 'react'

export default function Transactions({addIncome, addExpense}) {
    const [label, setLabel] = useState('');
    const [amount, setAmount] = useState('');

    const addInc = (income) => {
        addIncome(income);
        setTimeout(() => {
            setLabel('');
            setAmount('');
        }, 500)
    }

    const addEx = (expense) => {
        addExpense(expense);
        setTimeout(() => {
            setLabel('');
            setAmount('');
        }, 500)
    }

    return (
        <div className='row' >
            <div className="col-md-6 mx-auto">
                <div className="row g-3 my-3">
                    <div className="col-auto">
                        <button
                            onClick={() => addInc({id: 3, label, amount})}
                            className="btn btn-sm btn-success mb-3"
                        >
                            <i className="bi bi-bag-plus-fill"></i>
                        </button>
                    </div>
                    <div className="col-auto">
                        <input 
                            value={label}
                            onChange={(event) => setLabel(event.target.value)}
                            type='text' 
                            className='form-control mb-2'
                            placeholder='Label'
                        />
                        <input
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            type='number' 
                            className='form-control mb-2' 
                            placeholder='Amount'
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            onClick={() => addEx({id: 2, label, amount})}
                            className="btn btn-sm btn-danger mb-3"
                        >
                            <i className="bi bi-bag-dash-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}