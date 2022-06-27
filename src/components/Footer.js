import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.Styles.css'

const Footer = () => {
  return (
    
    <footer>

        <div className="footer-items">

            <div className="footer-item">
                <h4>About Us</h4>
                <Link to='/nopage'>Our History</Link>
                <Link to='/nopage'>Management</Link>
                <Link to='/nopage'>Our Vision</Link>
            </div>

            <div className="footer-item">
                <h4>Services</h4>
                <Link to='/nopage'>Catering</Link>
                <Link to='/nopage'>Birthdays</Link>
                <Link to='/nopage'>Events</Link>
            </div>

            <div className="footer-item">
                <h4>Our Partners</h4>
                <Link to='/nopage'>Coca-Cola</Link>
                <Link to='/nopage'>ZX Manifest</Link>
                <Link to='/nopage'>Enviro Aware</Link>
            </div>

            <div className="footer-item">
                <h4>Social Media</h4>
                <Link to='/nopage'>Facebook</Link>
                <Link to='/nopage'>Twitter</Link>
                <Link to='/nopage'>Instagram</Link>
                <Link to='/nopage'>Youtube</Link>
            </div>

        </div>

        <div className="footer-info">

        <Link to='/nopage'>Facebook</Link>
                <Link to='/nopage'>Privacy</Link>
                <Link to='/nopage'>Terms & Conditions</Link>
                <Link to='/nopage'>Our Menu (Download)</Link>
                <Link to='/nopage'>2022 - All Rights Reserved</Link>

        </div>
    
 </footer>

  )
}

export default Footer