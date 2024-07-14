import React, { useState, useMemo } from 'react'
import './App.css'
import UseMemoHookLearn from './components/UseMemoHookLearn/UseMemoHookLearn';

const App = () => {

  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(50);

  // const checking = () => {
    // console.log('......');
    // for(let i = 0; i < 500000000; i++) {}
    // return plus % 2 === 0;
  // };

  const checking = useMemo(() => {
    console.log('......');
    for(let i = 0; i < 500000000; i++) {}
    return plus % 2 === 0;
  }, [plus]);

  return (
    <div>

      {/* <h4>Checking - {checking() ? 'Even' : 'Odd'}</h4> */}

      <h4>Checking - {checking ? 'Even' : 'Odd'}</h4>

      <button onClick={() => setPlus(plus + 1)}>Plus - {plus} </button>

      <hr />

      <button onClick={() => setMinus(minus - 1)}>Minus - {minus} </button>

      <hr />


      <UseMemoHookLearn></UseMemoHookLearn>

    </div>
  )
}

export default App