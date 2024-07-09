import React from 'react'
import useCounterHook from '../../Hooks/useCounterHook'

const Counter1 = () => {
    
    const [counter, incre, decre] = useCounterHook(5);
    
    return (
        <div>
            <h1> {counter} </h1>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
        </div>
  )
}

export default Counter1