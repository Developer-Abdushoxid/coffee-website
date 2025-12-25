import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css'
import About from './components/About/About'
import CoffeeNews from './components/CoffeeNews/CoffeeNews'
import WhyUs from './components/WhyUs/WhyUs'
const App = () => {
  return (
    <div>
      <div className='layout'>
      <Navbar />
      <Hero />
      </div>
      <About />
      <CoffeeNews />
      <WhyUs />
    </div>
  )
}

export default App