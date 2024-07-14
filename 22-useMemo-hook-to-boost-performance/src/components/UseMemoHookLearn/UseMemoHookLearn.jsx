import React, { useMemo, useState } from 'react'

const UseMemoHookLearn = () => {
    
    const [inc, setInc] = useState(0);
    const [dec, setDec] = useState(100);

    const troubleInc = useMemo(() => {
        console.log('trouble trigger');
        for(let i = 0; i < 45000000; i++) {}
        return inc * 5;
    }, [inc]);

    const troubleDec = useMemo(() => {
        console.log('trouble trigger');
        for(let i = 0; i < 10; i++) {}
        return dec / 5;
    }, [dec]);

  return (
    <div>

        <h3>Use Memo Hook Learn</h3>

        <h4>Value Inc: {troubleInc} </h4>
        <h4>Value Dec: {troubleDec} </h4>

        <button onClick={() => setInc(inc + 1)}>Increase: {inc} </button>
        <hr />
        <button onClick={() => setDec(dec - 1)}>Decrease: {dec} </button>

    </div>
  )
}

export default UseMemoHookLearn