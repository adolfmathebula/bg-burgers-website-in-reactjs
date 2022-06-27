import React from 'react'
import '../styles/Button.Styles.css'

const Button = ({styleClass, text}) => {
  return (
    <button className={styleClass}>{text}</button>
  )
}

export default Button