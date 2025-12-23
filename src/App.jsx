import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css'
import About from './components/About/About'
const App = () => {
  return (
    <div>
      <div className='layout'>
      <Navbar />
      <Hero />
      </div>
      <About />
    </div>
  )
}

export default App