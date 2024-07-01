import React, { useEffect, useState } from 'react'
import EachProduct from '../EachProduct/EachProduct';

const Products = ({addToCartBtn}) => {

  const [products, setProducts] = useState([]);
  // console.log(products);

    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

  return (
    <div className='grid grid-cols-3 gap-5'>

      {
        products.map(eachProduct => <EachProduct 
          key = {eachProduct.id}
          eachProduct = {eachProduct}
          addToCartBtn = {addToCartBtn}
        ></EachProduct>)
      }
    </div>
  )
}

export default Products