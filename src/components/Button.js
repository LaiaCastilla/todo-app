import React, {props} from 'react'

import style from "../styles/modules/button.module.scss"

function Button(props) {
  return (
    <button className={style.button}>{props.text}</button>
  )
}

export default Button