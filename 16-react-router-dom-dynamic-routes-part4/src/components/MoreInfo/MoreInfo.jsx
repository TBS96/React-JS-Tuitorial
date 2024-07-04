import React from 'react'
import { useLoaderData } from 'react-router-dom'

const MoreInfo = () => {

  const moreInfo = useLoaderData();
  // console.log(moreInfo);

  const {image, category, title, description, price} = moreInfo;

  return (
    <div className='border-2 border-lime-600 p-5 flex justify-center items-center'>

      <img src={image} alt="img" />

      <div className='border-2 border-red-600 mt-4 p-4'>
        <h3>Category: {category}</h3>
        <h4>Title: {title}</h4>
        <p>Description: {description}</p>
        <p className='text-blue-600'>Price: ${price}</p>
      </div>

    </div>
  )
}

export default MoreInfo