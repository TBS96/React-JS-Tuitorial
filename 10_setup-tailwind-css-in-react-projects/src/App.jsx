import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import SingleUserData from './components/SingleUserData/SingleUserData';

const App = () => {

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setAllData(data))
  }, []);

  return (
    <div className='grid grid-cols-3 gap-4'>

      {
        allData.map(singleData => <SingleUserData 
          key = {singleData.id}
          singleData = {singleData}
        ></SingleUserData>)
      }

    </div>
  )
}

export default App