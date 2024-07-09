import React, { useState } from 'react'

const useCounterHook = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    const incre = () => {
        setCounter(counter + 1);
    };

    const decre = () => {
        setCounter(counter - 1);
    };

  return [counter, incre, decre];
}

export default useCounterHook