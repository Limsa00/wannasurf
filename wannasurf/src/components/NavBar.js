import "./navBar.css"
import logoWannaSurf from "../images/logoWannaSurf.png"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {

  const [ showLinks, setShowLinks ] = useState(false)

  const handleShowLinks = () =>
    setShowLinks(!showLinks)
    return (
      <nav className={`nav-bar-bloc ${showLinks ? "show-nav" : "hide-nav"} `}>
        <div className="logo">
            <img src={logoWannaSurf} alt="logo la startup wannaSurf" className="logo-param" />
        </div>

        <div className="title">
          <h1>WANNA<span className="logo-color">SURF</span></h1>
        </div>
            
        <div className="bruger-menu">
                <ul className="navbar-links">
                  <li className="navbar-item" onClick={handleShowLinks}>
                    <Link to="/wannasurf/home" className="navbar-link">
                      Home
                    </Link>
                  </li>
                  <li className="navbar-item" onClick={handleShowLinks}>
                    <a href="/" className="navbar-link">
                      Mon espace
                    </a>
                  </li>
                  <li className="navbar-item" onClick={handleShowLinks}>
                    <Link to="/wannasurf/createTraject" className="navbar-link">
                      Publier un trajet
                    </Link>
                  </li>
                  <li className="navbar-item" onClick={handleShowLinks}>
                    <a href="/" className="navbar-link">
                      Se deconnecter
                    </a>
                  </li>
                </ul>  
                <button className="navbar-burger" onClick={handleShowLinks}>
                  <span className="burger-bar"></span>
                </button> 
        </div>
      </nav>
    )
}
