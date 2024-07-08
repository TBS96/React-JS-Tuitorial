import React from 'react'
import './ExploreDyData.css'

const exploreStyleObj = {
    border: "2px solid red",
    backgroundColor: "aqua",
    padding: "50px 100px",
    margin: "20px",
    borderRadius: "5px"
};

const ExploreDyData = (props) => {
    
    const propsName = props.name;
    const propsAge = props.age;
    const propsProfsn = props.profession;

  return (
    <div style={exploreStyleObj}>
        <h1 className='h1Tag'>Explore Dynamic Data</h1>
        <h2>Name: {propsName}</h2>
        <h3>Age: {propsAge}</h3>
        <h4>Profession: {propsProfsn}</h4>
    </div>
  )
}

export default ExploreDyData