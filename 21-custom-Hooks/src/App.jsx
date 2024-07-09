import React from 'react'
import './App.css'
import Counter1 from './components/Counter1/Counter1'
import Counter2 from './components/Counter2/Counter2'

const App = () => {
  return (
    <div>
      <h1>Hello custom Hook</h1>
      <Counter1></Counter1>
      <Counter2></Counter2>
    </div>
  )
}

export default App