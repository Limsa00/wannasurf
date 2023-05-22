import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoWannaSurf from "../images/logoWannaSurf.png"

export default function NavFrame(props) {

    const [ showLinks, setShowLinks ] = useState(false)

    const handleShowLinks = () =>
    setShowLinks(!showLinks)
    
  return (
        <nav className={`nav-bar-bloc ${showLinks ? "show-nav" : "hide-nav"} `}>
          <div className="logo">
                <img src={logoWannaSurf} className="logo-size" alt="logo de l'application de covoiturage wannasurf" />
            </div>

            <Link to="/" className="navbar-link link-style">
                <div className="title-wannasurf">
                    <h1>WANNASURF</h1>
                </div>
            </Link>

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
