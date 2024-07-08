import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';

const Products = ({addToCartBtn}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

  return (
    <div className='grid grid-cols-3 gap-8'>
        {
            products.map(product => <Product 
                key = {product.id}
                product = {product}
                addToCartBtn = {addToCartBtn}
            ></Product>)
        }
    </div>
  )
}

export default Products