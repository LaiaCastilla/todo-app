import React from 'react'

import style from "../styles/modules/button.module.scss"
import { getClasses } from '../utils/getClasses'

const buttonTypes={
  primary: "primary",
  secondary:"secondary",
}

function Button({type, variant, children,title, ...rest }) {
  return (
    <button

    title={title}

      className={getClasses([
        style.button,
        style[`button--${buttonTypes[variant]}`],
      ])}
      type={type === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

function SelectButton({children, id,title, ...rest}){
  return(
    <select className={getClasses([style.button,style.button__select])} {...rest} title={title}>{children}</select>
  )
}
export {SelectButton}
export default Button