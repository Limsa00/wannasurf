/**
 * Ce fichier définit le composant Button.
 * Il affiche un bouton avec des propriétés personnalisables.
 * @module Button
*/

import React from 'react';
import styles from "./Button.module.css";

/**
 * Composant Button.
 * @param {Object} props - Les propriétés du bouton.
 * @param {string} props.className - Classe CSS personnalisée pour le bouton.
 * @param {string} props.type - Type du bouton (par défaut: "submit").
 * @param {boolean} props.disabled - Indique si le bouton est désactivé.
 * @param {Function} props.onClick - Fonction de rappel déclenchée lors du clic sur le bouton.
 * @returns {JSX.Element} Élément HTML représentant le bouton.
 */
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
