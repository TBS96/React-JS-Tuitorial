import React from 'react'

const EachProduct = ({eachProduct, addToCartBtn}) => {

    const {name, age, profession} = eachProduct;

  return (
    <div className='border-2 border-red-600 p-6 py-8'>
        <h1 className='text-2xl'>{name}</h1>
        <p>{age}</p>
        <p>{profession}</p>
        <button onClick={() => addToCartBtn(eachProduct)} className='bg-green-800 px-4 py-2 mt-3'>Add to cart</button>
    </div>
  )
}

export default EachProduct