import React, { useState } from 'react'
import Counter from './components/counter';

const App = () => {

  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  }
  const decrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }

  }

  const reset = () => {
    setNum(0)
  }

  return (

    <div className='counter-app'>
      <h5>Counter App</h5>
      <Counter counter={num} inc={increment} dec={decrement} reset={reset} />


    </div>
  )
}

export default App
