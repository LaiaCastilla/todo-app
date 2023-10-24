import React, {props} from 'react'

import style from "../styles/modules/button.module.scss"
import { getClasses } from '../utils/getClasses'

const buttonTypes={
  primary: "primary",
  secondary:"secondary",
}

function Button(props) {
  return (
    <button className={getClasses([style.button,style[`button--${buttonTypes[props.variant]}`]])}>{props.text}</button>
  )
}

export default Button