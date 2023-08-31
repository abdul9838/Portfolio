import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Home from './components/Home/Home'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App