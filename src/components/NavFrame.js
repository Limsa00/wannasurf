/**
 * Ce fichier définit le composant `NavFrame` qui représente le cadre de la barre de navigation.
 * @module NavFrame
*/

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoWannaSurf from "../images/logoWannaSurf.png"

/**
 * Composant `NavFrame`.
 * @param {Object} props - Les propriétés du composant.
 * @returns {JSX.Element} Élément HTML représentant le cadre de la barre de navigation.
 */

export default function NavFrame(props) {

    const [ showLinks, setShowLinks ] = useState(false)

    /**
     * Fonction pour afficher ou masquer les liens de navigation.
     */
    const handleShowLinks = () =>
    setShowLinks(!showLinks)
    
  return (
        <nav className={`nav-bar-bloc ${showLinks ? "show-nav" : "hide-nav"} `}>
            <div className="logo">
                <img src={logoWannaSurf} className="logo-size" alt="logo de l'application de covoiturage wannasurf" />
                <Link to="/wannasurf" className="navbar-link link-style">
                    <div className="title-wannasurf">
                        <h1>WANNASURF</h1>
                    </div>
                </Link>
          </div>

            <div className="bruger-menu">
                <ul className="navbar-links">
                    {props.children}
                </ul>
                <button className="navbar-burger" onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button> 
                </div>
        </nav>
  )
  }
