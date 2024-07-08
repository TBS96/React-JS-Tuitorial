import React from 'react'
import './App.css'
import { useState } from 'react';

const App = () => {

  const [price, setPrice] = useState(20);

  // let price = 20;

  const increasePrice = () => {
    
    // console.log('Price value:',price);
    // price = price + 1;

    const newPrice = price + 1;
    setPrice(newPrice);
  }

  const decreasePrice = () => {
    const newPrice = price - 1;
    setPrice(newPrice);
  }

  return (
    <div>
      <h1>Price : {price}</h1>
      <button onClick={increasePrice}>Increase Btn</button> &nbsp;&nbsp;&nbsp;
      <button onClick={decreasePrice}>Decrease Btn</button>

      <h2>Price : {price}</h2>
      <p>Price: {price}</p>
      <h4>Price: {price}</h4>
    </div>
  )
}

export default App