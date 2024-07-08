import React, { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Placement from './components/Placement/Placement'

const App = () => {

  const [cart, setCart] = useState([]);

  const addToCartBtn = (product) => {
    // alert('clicked');
    // console.log('clicked',product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className='flex gap-x-6'>
      <Products addToCartBtn = {addToCartBtn}></Products>
      <Placement cart = {cart}></Placement>
    </div>
  )
}

export default App