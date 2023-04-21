import { style } from '@mui/system';
import React from 'react';
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button 
        className={props.className || styles['btn-style']} //on importe le css avec styles et on utilise [''] pour que react interprete et comprennent la classe avec le "-" au milieu. Sinon styles.btn
        type={props.type || "submit"} 
        disabled={props.disabled}
        onClick={props.onClick}
        >       
        {props.children}
    </button>
  )
}

export default Button;
