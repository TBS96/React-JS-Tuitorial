import React from 'react'
import useCounterHook from '../../Hooks/useCounterHook'

const Counter2 = () => {
  
  const [counter, incre, decre] = useCounterHook(6);
  
  return (
    <div>
      <h2> {counter} </h2>
      <button onClick={incre}>+</button>
      <button onClick={decre}>-</button>
    </div>
  )
}

export default Counter2