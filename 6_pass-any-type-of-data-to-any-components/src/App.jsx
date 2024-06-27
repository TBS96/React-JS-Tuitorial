import React from 'react'
import './App.css'
import Products from './components/Products/Products'

const App = () => {

  // // passing data using objects:
  // const productsObj = {
  //   name: 'Nokia',
  //   price: 15000
  // }


  // // passing data using array:
  // const arrays = ['Prantik', 'Deepa', 'Subhash', 'Tapas'];
  const productsArray = [
    { name: 'Nokia', price: 20000 },
    { name: 'Samsung', price: 25000 },
    { name: 'Moto', price: 17000 }
  ];

  // to pass alert function as data to any components i.e, here Products.jsx:
  const forAlert = () => {
    alert('Alerting!!')
  }

  return (
    <div>

      {
      /* // passing data using objects:
      <Products 
        products = {productsObj}
      ></Products> */
      }

      {
      /* <Products 
        arrays = {arrays}
      ></Products> */
      }

      {
      /* <Products
        productsArray = {productsArray}
      ></Products> */
      }


      {/* showing array data using loop */}
      {
        productsArray.map(singleProduct => <Products
          singleProduct = {singleProduct}
          alert = {forAlert}
        ></Products>)
      }

    </div>
  )
}

export default App