import React from 'react';
import '../styles/SidebarStyles.css';
import Logo from '../images/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <img src={Logo} alt="logo" className='logo-sidebar'/>
    </div>
  )
}

export default Sidebar