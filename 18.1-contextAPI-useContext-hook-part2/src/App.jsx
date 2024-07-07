import React, { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

export const CountCreateContext = createContext();
export const AnotherContext = createContext();

const App = () => {

  const [count, setCount] = useState(0);
  const [another, setAnother] = useState(25);

  return (

    <div>

      <AnotherContext.Provider value={[another, setAnother]}>
        <CountCreateContext.Provider value={[count, setCount]}>

          <button onClick={() => {setCount(count + 1)}}>Count: {count}</button>

          <Navbar></Navbar>

        </CountCreateContext.Provider>
      </AnotherContext.Provider>

    </div>

  )
}

export default App