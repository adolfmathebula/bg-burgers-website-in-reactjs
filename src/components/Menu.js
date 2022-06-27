import React from 'react'
import '../styles/Menu.Styles.css'
import Button from './Button'
import MenuItems from './MenuItems.js'

const Menu = () => {
  return (
    <div className="menu-section">
        {
            MenuItems.map((item, key) => (
                <div className="new-burger-special" key={item.id} >
                    <img src={item.image} alt="" />
                    <span className="burger-name">{item.name}</span>
                    <span className="burger-includes">{item.includes}</span>
                    <span className="burger-price">{item.price} <Button styleClass="btn-order" text="ORDER" /></span>
                </div>
                )
            )
        }

    </div>
  )
}

export default Menu