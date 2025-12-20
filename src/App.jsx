import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import './App.css'
const App = () => {
  return (
    <div>
      <div className='layout'>
      <Navbar />
      <Main />
      </div>
    </div>
  )
}

export default App