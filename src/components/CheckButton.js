import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion';
import style from "../styles/modules/todoItem.module.scss"

const boxVariants = {
  checked: {
    background: "var(--primaryPurple)",
    transition: { duration: .1 },
  },
  unchecked: {
    background: "var(--gray-1)",
    transition: { duration: .1 },
  },
};
const checkVariants={
    initial:{
        color: "#fff",
    },
    checked:{
        pathLength:1,
    },
    unchecked:{
        pathLength:0,
    },
};


function CheckButton({checked, setChecked}) {
    const pathLength=useMotionValue(0);
    const opacity=useTransform(pathLength,[0.05,0.15],[0,1]);
  return (
    <motion.div
      className={style.svgBox}
      animate={checked ? "checked" : "unchecked"}
      variants={boxVariants}
      onClick={() => {
        // whatever it is we make it the oppposite
        setChecked(!checked)
      }}
    >
      <motion.svg
        className={style.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? "checked" : "unchecked"}
          style={{pathLength,opacity}}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
}

export default CheckButton