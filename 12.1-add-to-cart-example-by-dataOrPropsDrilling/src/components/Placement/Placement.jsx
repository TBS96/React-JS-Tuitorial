import React from 'react'
import SingleCartData from '../SingleCartData/SingleCartData'

const Placement = ({cart}) => {

    // console.log(cart);

  return (
    <div>
        <h1 className='text-3xl'>Added to cart: <span className=' text-cyan-700 text-4xl'>{cart.length}</span></h1>

        {
            cart.map(singleCartData => <SingleCartData 
                key = {singleCartData.id}
                singleCartData = {singleCartData}
            ></SingleCartData>)
        }
    </div>
  )
}

export default Placement