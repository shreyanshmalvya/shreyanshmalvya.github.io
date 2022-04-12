import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Home from '../../pages/home/Home'
import Projects from '../../pages/projects/Projects'

const Main = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Home />
        <Projects />
        <Footer />
    </div>
  )
}

export default Main