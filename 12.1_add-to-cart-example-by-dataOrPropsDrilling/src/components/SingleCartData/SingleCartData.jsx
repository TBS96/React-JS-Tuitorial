import React from 'react'

const SingleCartData = ({singleCartData}) => {

    const {img, name, age, email, company, profession, phone_no} = singleCartData;

  return (
    <div className=' px-3 mt-2'>
        <hr />
        <img className='border-2 rounded-full' src={img} alt="imgs" />
        <h1 className='text-2xl'>{name}, <span className='text-xl'>{age}</span></h1>
        <span>{profession}</span>,&nbsp; <span>{company}</span>
        <p>{phone_no}</p>
        <hr />
    </div>
  )
}

export default SingleCartData