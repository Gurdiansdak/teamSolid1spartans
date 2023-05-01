import React from 'react'
import css from './Buttons.module.css'

function Buttons({ title, variant, ...props }) {
  return (
    <button {...props} className={`${css.wrapper} ${variant === "login" ? css.login : ""} ${variant === "login2" ? css.login2 : ""} ${variant === "join" ? css.join: ""} ${variant === "join2" ? css.join2: ""}`}>{title}</button>
  )
}

export default Buttons