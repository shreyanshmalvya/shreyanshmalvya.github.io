import React from 'react'
import hero from '../../images/hero.png'
import './hero.css'

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="imgWrapper">
        <img className='heroImage' src={hero} alt='hero' />
      </div>
      <div className="heroText">
        <div>Hey, It's Shreyansh a product designer & web developer, <br />love to binge into design adventures</div>
      </div>
      <div className="btnWrapper">
        <div className='worksbtn' >View My Work</div>
      </div>
    </div>
  )
}

export default Hero