import React, { useState, useEffect } from 'react'
import logo from '../../images/logo.png'
import upArrow from '../../images/upArrow.svg'
import './navbar.css'

const Navbar = () => {
    // const [show, setShow] = useState(true);
    // const [lastScrollY, setLastScrollY] = useState(0);

    // if (typeof window !== 'undefined') {
    //     if (window.scrollY > lastScrollY) {
    //         setShow(false);
    //     } else {
    //         setShow(true);
    //     }
    //     setLastScrollY(window.scrollY);
    // }


    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         window.addEventListener('scroll', controlNavbar);

    //         return () => {
    //             window.removeEventListener('scroll', controlNavbar);
    //         };
    //     }
    // }, [lastScrollY]);


    return (
        <div className="wrapper">
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
        </div>
    );
}

export default Navbar