import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Context1Provider } from './Contexts/Context1'

const App = () => {

  return (
    <div>
      <Context1Provider>
        <Navbar></Navbar>
        <button>Count0: </button>
      </Context1Provider>
    </div>
  )
}

export default App