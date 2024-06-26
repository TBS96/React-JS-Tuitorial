import React from 'react'
import './App.css'
import Services from './components/Services/Services'
import ExploreDyData from './components/ExploreDynamicData/ExploreDyData'


const App = () => {
  return (
    <div>
      <Services></Services>
      <ExploreDyData name='Prantik' age='28' profession='Developer'></ExploreDyData>
      <ExploreDyData name='Deepa' age='53' profession='Home-maker'></ExploreDyData>
      <ExploreDyData name='Subhash' age='55' profession='Business'></ExploreDyData>
    </div>
  )
}

export default App