import React from 'react'
import './Services.css'

const Services = () => {
    const multiply = (num) => {
        // console.log(num*3);
        document.getElementById('service-component').textContent = num * 3;
    };
  return(
    <div>
        <h1 id='service-component'>Click the button below to see the result here</h1>
        <button onClick={() => {multiply(5)}} className='click-btn'>Click Me</button>
    </div>
  )
};

export default Services