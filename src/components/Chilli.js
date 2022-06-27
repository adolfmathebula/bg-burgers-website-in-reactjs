import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Chilli.Styles.css'
import Button from '../components/Button'

const Chilli = () => {
  return (
    <section className="chilli-section">

    <div className="chilli-info">
        <h2>Enjoy Our Vegan</h2>
        <p>For those who have a chilli tooth are and a huge appetite for more-section
            we have our new vagan chilli burger guranteed to satisfy their cravings and
            give them a special moment while they enjoy it with our salads and fries.
        </p>
        <p className="para-2">
            <br/>You can customize your burger to your own taste and desire without adding more
            to the price. Creating your own experiences without having to worry about the depth of your pocket
        </p>

        <Link to='/nopage'><Button styleClass="bt-chilli" text="Explore More" /></Link>

    </div>


</section> 
  )
}

export default Chilli