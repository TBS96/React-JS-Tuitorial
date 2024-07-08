import React from 'react'

const Product = ({product, addToCartBtn}) => {

    const {img, name, age, email, company, profession, phone_no} = product;

  return (
    <div className='border-2 border-lime-500 py-8'>
        <img src={img} alt="imgs" />
        <h1 className='text-2xl'>Name: {name}</h1>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Profession: {profession}</p>
        <p>Ph.: {phone_no}</p>
        <button onClick={() => addToCartBtn(product)} className='bg-blue-700 py-2 px-3 mt-4 text-teal-50'>Add to cart</button>
    </div>
  )
}

export default Product