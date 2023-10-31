import React from 'react'
import style from "../styles/modules/todoItem.module.scss"

function CheckButton() {
  return (
    <div className={style.svgBox}>
      <svg className={style.svg}
      viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>

    </div>
  );
}

export default CheckButton