import React, { useEffect, useState } from 'react'

export default function Balance({balance}) {
    const [currentBalance, setCurrentBalance] = useState(0);

    useEffect(() => {
        setCurrentBalance(balance)
    },[balance]);


    return (
        <div className='bg-white border border-success text-center rounded'>
            <p className="lead mt-3">
                <span className="fw-bold me-2">
                    Balance:
                </span>
                <span className="badge bg-success">
                    $ {currentBalance}
                </span>
            </p>
        </div>
    )
}