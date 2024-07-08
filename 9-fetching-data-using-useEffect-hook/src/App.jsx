import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import SingleUserData from './components/SingleUserData/SingleUserData';

const App = () => {
  const [allData, setAllData] = useState([]);
  // console.log(allData);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setAllData(data))
  }, []);

  return (
    <div>
      <h1>All data: {allData.length}</h1>
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

// key = {singleData.id}, this should be given when we use map loop to get data, and key denotes as something unique. this also avoids console warnings.