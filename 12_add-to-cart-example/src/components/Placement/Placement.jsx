import React from 'react'
import SingleCart from '../SingleCart/SingleCart';

const Placement = ({cart}) => {

    // console.log(cart);

  return (
    <div className=' border-2'>
        <h1 className='text-3xl underline'>Placement</h1>
        {
            cart.map(singleCart => <SingleCart 
                key = {singleCart.id}
                singleCart = {singleCart}
            ></SingleCart>)
        }
    </div>
  )
}

export default Placement