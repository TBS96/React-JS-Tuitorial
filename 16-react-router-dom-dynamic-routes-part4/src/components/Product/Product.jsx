import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    const {id, image, category, title, description, price} = product;

  return (
    <Link to={`/product/${id}`}>

      <div className='border-2 hover:border-red-950 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
        <img src={image} alt="img" />
        <h1>ID: {id}</h1>
        <h3>Category: {category}</h3>
        <h4>Title: {title}</h4>
        <p>Description: {description}</p>
        <p className='text-2xl'>Price: ${price}</p>

        <Link to={`/product/${id}`}>
          <button className='bg-red-700 my-5 px-4'>More info...</button>
        </Link>
      </div>

    </Link>
  )
}

export default Product