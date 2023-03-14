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
                <img src={logoWannaSurf} alt="logo la startup wannaSurf" className="logo-param" />
            </div>

            <Link to="/wannasurf/home" className="navbar-link link-style">
                <div className="title-wannasurf">
                    <h1>WANNA<span className="logo-color">SURF</span></h1>
                </div>
            </Link>

            <div className="bruger-menu">
                <ul className="navbar-links">
                    {props.children}
                </ul>
            </div>

                <div className="bruger-menu">
                <button className="navbar-burger" onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button> 
                </div>
        </nav>
  )
  }
