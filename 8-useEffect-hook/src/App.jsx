import './App.css'
import { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('react');

  useEffect(() => {
    alert('count state was changed');
  }, [count])

  useEffect(() => {
    alert('name state changed');
  }, [name])

  const updtCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const updtName = () => {
    const newName = name + 'js';
    setName(newName);
  }

  return (
    <div>
      <h1>Steps: {count}</h1>
      <button onClick={updtCount}>Steps</button>

      <h2>Name: {name}</h2>
      <button onClick={updtName}>Update name</button>
    </div>
  )
}

export default App