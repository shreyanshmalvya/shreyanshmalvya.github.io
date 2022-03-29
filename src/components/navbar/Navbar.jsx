import React from 'react'
import logo from '../../images/logo.png'
import upArrow from '../../images/upArrow.svg'

import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <div className='navbarLogo'>
                <img src={logo} alt="logo" />
            </div>
            <ul className='navbarList'>
                <li className='navbarListItem'>Home</li>
                <li className='navbarListItem'>About</li>
                <li className='navbarListItem'>Design</li>
                <li className='navbarListItem'>Contact<img src={upArrow} alt='uparrow' /></li>
            </ul>
        </div>
    )
}

export default Navbar