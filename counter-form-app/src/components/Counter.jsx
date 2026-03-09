import React from 'react'

const Counter = ({ nums, inc, r, dec }) => {
    return (
        <div className='counter'>
            <h1>Counter</h1>
            <div>
                <h2>{nums}</h2>
            </div>
            <div className='btn-div'>
                <button onClick={inc}>+1 </button>
                <button onClick={r}>Reset</button>
                <button onClick={dec}>-1</button>
            </div>

        </div>
    )
}

export default Counter
