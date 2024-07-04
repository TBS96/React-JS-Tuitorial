import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-red-600 mb-7 p-5 rounded-xl'>

      <ul className='flex gap-4'>
        
        <li className='transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          <Link to={'/home'}>Home</Link>
        </li>

        <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          <Link to={'/product'}>Products</Link>
        </li>

        <li className='transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          <Link to={'/blog'}>Blogs</Link>
        </li>

        <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          <Link to={'/about'}>About</Link>
        </li>

        <li className='transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          <Link to={'/contact'}>Contact Us</Link>
        </li>

      </ul>

    </div>
  )
}

export default Navbar