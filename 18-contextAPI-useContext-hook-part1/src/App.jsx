import React, { createContext, useState } from 'react'
import './App.css'
import FirstPage from './components/FirstPage/FirstPage'

export const CreateContextCount = createContext();

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>

      <CreateContextCount.Provider value={count}>
        
        <FirstPage></FirstPage>

        <button onClick={() => {setCount(count + 1)}}>
          App Page Count: {count}
        </button>

      </CreateContextCount.Provider>

    </div>
  )
}

export default App