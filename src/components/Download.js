import React from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '../images/google_play_badge.png'
import AppleIcon from '../images/app_store_badge.png'

const Download = () => {
  return (
    <section style={downloadSection}>

        <h3 style={heading}>Our App</h3>
        <Link to='/nopage'><img src={GoogleIcon} alt="Google Play" style={image} /></Link>
        <Link to='/nopage'><img src={AppleIcon} alt="Apple Store"  style={image} /></Link>

    </section>
  )
}

const downloadSection = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    padding: '30px 30px 30px 0px'
}

const heading = {
    padding: '0px',
    margin: '0px',
    color: '#e48b2c',
    textTransform: 'capitalize'
}

const image = {
    width: '100px'
}




export default Download