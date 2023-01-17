import "./navBar.css"
import logoWannaSurf from "../../images/logoWannaSurf.png"
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"

export const Navbar = () => {

  const [ showLinks, setShowLinks ] = useState(false)

  const handleShowLinks = () =>
    setShowLinks(!showLinks)

  const {toggleModals} = useContext(UserContext)

    return (
      <nav className={`nav-bar-bloc ${showLinks ? "show-nav" : "hide-nav"} `}>
        <div className="logo">
            <img src={logoWannaSurf} alt="logo la startup wannaSurf" className="logo-param" />
        </div>

        <div className="title-wannasurf">
          <h1>WANNA<span className="logo-color">SURF</span></h1>
        </div>
            
        <div className="bruger-menu">
                <ul className="navbar-links">
                  <li className="navbar-item" onClick={handleShowLinks}>
                    <Link to="/wannasurf/sinscrire"><button onClick={() => toggleModals("SignUp")} className="navbar-link">
                      S'inscrire
                    </button>
                    </Link>
                  </li>
                  <li className="navbar-item" onClick={handleShowLinks}>
                    <Link to="/wannasurf/seconnecter"> <button onClick={() => toggleModals("SignIn")} className="navbar-link">
                      Se connecter
                    </button>
                    </Link>
                  </li>
                  <li className="navbar-item" onClick={handleShowLinks}>
                    <button  onClick={() => toggleModals("close")} href="/" className="navbar-link">
                      Se deconnecter
                    </button>
                  </li>
                </ul>  
                <button className="navbar-burger" onClick={handleShowLinks}>
                  <span className="burger-bar"></span>
                </button> 
        </div>
      </nav>
    )
}
