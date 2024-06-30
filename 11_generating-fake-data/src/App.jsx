import React, { useEffect, useState } from 'react'
import './App.css'
import SingleFakeData from './components/SingleFakeData/SingleFakeData';

const App = () => {
  
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setFakeData(data))
  }, [])
  
  return (
    <div className="grid grid-cols-3 gap-4 bg-zinc-600">

      {/* <h1 className='text-4xl underline'>Data length: {fakeData.length}</h1> */}

      {
        fakeData.map(singleData => <SingleFakeData 
          key={singleData.id}
          singleData = {singleData}
        ></SingleFakeData>)
      }

    </div>
  )
}

export default App