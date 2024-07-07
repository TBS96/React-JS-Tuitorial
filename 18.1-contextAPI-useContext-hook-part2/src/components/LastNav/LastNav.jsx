import React, { useContext } from 'react'
import { AnotherContext } from '../../App';

const LastNav = () => {

  const [another, setAnother] = useContext(AnotherContext);

  return (
    <div>
        <button onClick={() => setAnother(another / 4)}>LastNav Count: {another}</button>
    </div>
  )
}

export default LastNav