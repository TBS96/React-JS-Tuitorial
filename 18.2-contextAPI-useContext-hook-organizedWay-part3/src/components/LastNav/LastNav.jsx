import React, { useContext } from 'react'
import { Context1 } from '../../Contexts/Context1'

const LastNav = () => {

  const [a, setA] = useContext(Context1);

  return (
    <div>
      <button onClick={() => {setA(a + ' ' + a)}}>Count3: {a}</button>
    </div>
  )
}

export default LastNav