import React from 'react'
import { useState} from 'react'
import '../styles/Nav.Styles.css'
import {DesktopLinks} from './NavLinks'
import {MobileLinks} from './NavLinks'

const Nav = () => {

    const [show, setShow] = useState(false);

    const mobileMenuClick = () => {
        setShow(!show);
    }
  
  return (
    <nav className='navbar'>

        <div className='logo'>bg burgers</div>
        <DesktopLinks/>

        <div className='nav-mobile'>
            {show ? (<button className='nav-mobile-bars' onClick={mobileMenuClick}>&#10006;</button>)
            :
            (<button className='nav-mobile-bars' onClick={mobileMenuClick}>&#9776;</button>)}    
            {show ? <MobileLinks/>: ""}
        </div>

    </nav>
  )
}

export default Nav