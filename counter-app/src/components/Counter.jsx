import React from 'react'

const Counter = ({ counter, inc, dec, reset }) => {
    return (
        <div className='counter'>
            
            <div>
                <h1>{counter}</h1>
            </div>

            <div className='btn-div'>
                <button onClick={inc}>+</button>
                <button onClick={reset}>Reset</button>
                <button onClick={dec}>-</button>
            </div>

        </div>
    )
}

export default Counter
