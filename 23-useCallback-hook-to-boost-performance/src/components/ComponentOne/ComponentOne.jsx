import React from 'react'

const ComponentOne = ({nextOne}) => {
    
    console.log('hello component one', {nextOne});

  return (
    <div>Component One</div>
  )
}

export default React.memo(ComponentOne)