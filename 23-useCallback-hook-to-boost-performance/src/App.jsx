import React, { useCallback, useState } from 'react'
import './App.css'
import ComponentOne from './components/ComponentOne/ComponentOne';

const App = () => {

  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(99);

  // const nextOne = () => {
  //   console.log('Hola')
  // }

  const nextOne = useCallback(() => {
    console.log('wallah')
  },[]);

  return (
    <div>

      <ComponentOne nextOne = {nextOne}></ComponentOne>

      <button onClick={() => setPlus(plus + 1)}>Plus - {plus} </button>

      <hr />

      <button onClick={() => setMinus(minus - 1)}>Minus - {minus} </button>

    </div>
  )
}

export default App


// when we send props from App.jsx to ComponentOne and destructure it in ComponentOne and memoize the whole component, still everytime when we click plus or minus btn, the other functions present in the components gets triggered, which deteriorates our website. Thus to escape from this scenario, we use useCallback hook. the data will render only once when the page is reloaded if we keep an empty array [] as dependency, unless if we want torender a particular value or fn, we can set it as dependency.