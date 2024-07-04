import React from 'react'

const Product = ({product}) => {

    const {id, image, category, title, description, price} = product;

  return (
    <div className='border-2'>
        <img src={image} alt="img" />
        <h1>ID: {id}</h1>
        <h3>Category: {category}</h3>
        <h4>Title: {title}</h4>
        <p>Description: {description}</p>
        <small>Price: ${price}</small>
    </div>
  )
}

export default Product