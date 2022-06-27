import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.Styles.css'
import Burger from '../images/burger.png'
import Button from '../components/Button'


const Header = () => {
  return (
    <div className="header-container">
    <header className="header"> 
    <div className="header-info-section">

        <h1>The Burger Everyone Loves</h1>
        <h3>We are celebrating our 50 Stores milestone<br/> by adding more to our menu</h3>
        <p>We have added a new range flavours, guranteed to impress <br/>
        Our burger now come in three sizes and a bigger size</p>

        <div className="header-buttons1">

        <Link to='/nopage'><Button styleClass="bt-order" text="Order Yours" /></Link>
        <Link to='/nopage'><Button styleClass="bt-explore" text="Explore" /></Link>

        </div>

</div>

<div className="header-image-section"> 

    <img className="header-img" src={Burger} alt="header" />

    <div className="header-buttons2">
        <Button styleClass="bt-order" text="Order Yours" />
        <Button styleClass="bt-explore" text="Explore" />
    </div>

</div> 
</header>
</div>
  )
}

export default Header