import React, { useContext } from 'react'
import { CreateContextCount } from '../../App';

const ThirdPage = () => {

    const UseContextCount = useContext(CreateContextCount);

  return (
    <div>
        <button>Third Page Count: {UseContextCount}</button>
    </div>
  )
}

export default ThirdPage