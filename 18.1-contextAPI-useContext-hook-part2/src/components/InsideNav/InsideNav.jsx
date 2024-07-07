import React, { useContext } from 'react'
import LastNav from '../LastNav/LastNav'
import { CountCreateContext } from '../../App';

const InsideNav = () => {

  const [count, setCount] = useContext(CountCreateContext);

  return (
    <div>

        <button onClick={() => {setCount(count * 2)}}>InsideNav Count: {count}</button>

        <h1>Count is {count} times pressed</h1>

        <h1>InsideNav is {count *2} times of count</h1>

        <LastNav></LastNav>

    </div>
  )
}

export default InsideNav