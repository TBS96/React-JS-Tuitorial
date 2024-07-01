import React, { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Placement from './components/Placement/Placement'

const App = () => {

  const [cart, setCart] = useState([]);

  const addToCartBtn = (placement) => {
    // console.log('clicked', placement);
    const newPlacement = [...cart, placement];
    setCart(newPlacement);
  }

  return (
    <div className='flex gap-x-6'>
      <Products addToCartBtn = {addToCartBtn}></Products>
      <Placement cart = {cart}></Placement>
    </div>
  )
}

export default App