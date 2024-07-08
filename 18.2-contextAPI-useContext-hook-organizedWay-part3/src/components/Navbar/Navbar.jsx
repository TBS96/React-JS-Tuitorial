import React, { useContext } from 'react'
import InsideNav from '../InsideNav/InsideNav'
import { Context1 } from '../../Contexts/Context1'

const Navbar = () => {

  const [a, setA] = useContext(Context1);
  return (
    <div>
      <InsideNav></InsideNav>
      <button>Count1: {a}</button>
    </div>
  )
}

export default Navbar