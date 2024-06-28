import React, { useEffect, useState } from 'react'
import './App.css'
import EachUserData from './components/EachUserData';

const App = () => {

  const [allDat, setAllDat] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setAllDat(data))
  }, []);

  return (
    <div>

      <h1>All data length: {allDat.length}</h1>

      {
        allDat.map(eachData => <EachUserData 
          key={eachData.id}
          eachData = {eachData}
        ></EachUserData>)
      }

    </div>
  )
}

export default App