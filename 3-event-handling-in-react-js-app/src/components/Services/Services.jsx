import React from 'react'
import './Services.css'

const Services = () => {

    // raw js code starts
    const update = () => {
        const serviceComponent = document.getElementById('service-component');
        serviceComponent.innerText = 'Hello. i am next component';
    };
    // raw js code ends
    
  return(
    <div>
        <h1 id='service-component'>Services component</h1>
        <button onClick={update} className='click-btn'>Click Me</button>
    </div>
  )
};

export default Services