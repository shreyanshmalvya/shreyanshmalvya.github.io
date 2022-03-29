import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import './home.css'

const home = () => {
  return (
    <div className='homeWrapper'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default home