import React from 'react'

const SingleCart = ({singleCart}) => {

    const {name, age, profession} = singleCart;

  return (
    <div>
        <h1 className='text-2xl'>{name}</h1>
        <p>{age}</p>
        <p>{profession}</p>
    </div>
  )
}

export default SingleCart