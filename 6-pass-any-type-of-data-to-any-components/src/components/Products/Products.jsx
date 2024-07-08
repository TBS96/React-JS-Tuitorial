import React from 'react'
import './Products.css'

// // passing data using objects:
// const Products = (props) => {
//   console.log(props.products);

//   return (
//     <div>
//       <h1>Products Name: {props.products.name}</h1>
//       <h2>Price: {props.products.price}</h2>
//     </div>
//   )
// }


// //  passing data using array:
// const Products = (props) => {
// console.log(props.arrays);
//   return (
//     <div>
//       <h1>Array length: {props.arrays.length}</h1>
//       <h2>Name: {props.arrays[2]}</h2>
//     </div>
//   )
// }


// const Products = (props) => {
//   // console.log(props.productsArray);

//   return (
//     <div>
//       <h1>Product1 name: {props.productsArray[0].name}</h1>
//       <h2>Price: {props.productsArray[0].price}</h2>

//       <h1>Product2 name: {props.productsArray[1].name}</h1>
//       <h2>Price: {props.productsArray[1].price}</h2>

//       <h1>Product3 name: {props.productsArray[2].name}</h1>
//       <h2>Price: {props.productsArray[2].price}</h2>
//     </div>
//   )
// }


// showing array data using loop:
const Products = (props) => {

  // console.log(props.singleProduct);
  // console.log(props.alert);

  return (
    <div>
      <h1>Products name: {props.singleProduct.name}</h1>
      <h2>Price: {props.singleProduct.price}</h2>
      <button onClick={props.alert}>Click for alert from App.jsx dynamically!</button>
    </div>
  )
}

export default Products