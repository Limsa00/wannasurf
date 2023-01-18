import "./navBar.css"
import logoWannaSurf from "../../images/logoWannaSurf.png"
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase.config"

export const Navbar = () => {

  const [ showLinks, setShowLinks ] = useState(false)

  const handleShowLinks = () =>
    setShowLinks(!showLinks)

  const {toggleModals} = useContext(UserContext)

  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut (auth)
      navigate("/wannasurf/home")
    } catch {
      alert("For some reason we can't deconnect, please check your internet connection and retry")
    }
  }

const {currentUser} = useContext(UserContext)
        console.log("route de: ", currentUser )

        if(currentUser) {
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
                <Link to="/wannasurf/home" className="navbar-link">
                <button className="navbar-link">
                  Home
                </button>
                </Link>
              </li>
              <li className="navbar-item" onClick={handleShowLinks}>
                <Link to="/wannasurf/private/monEspace" className="navbar-link">
                  <button className="navbar-link">
                    Mon espace
                  </button>
                </Link>
              </li>
              <li className="navbar-item" onClick={handleShowLinks}>
                <Link to="/wannasurf/createTraject" className="navbar-link">
                <button className="navbar-link"> 
                  Publier un trajet
                </button>
                </Link>
              </li>
              <li className="navbar-item" onClick={handleShowLinks}>
                    <button  
                      onClick={logOut} 
                      href="/" className="navbar-link">
                      Se deconnecter
                    </button>
                  </li>
            </ul>  
            <button className="navbar-burger" onClick={handleShowLinks}>
              <span className="burger-bar"></span>
            </button> 
      </div>
      </nav>)
        }

    return (
      <nav className={`nav-bar-bloc ${showLinks ? "show-nav" : "hide-nav"} `}>
        <div className="logo">
            <img src={logoWannaSurf} alt="logo la startup wannaSurf" className="logo-param" />
        </div>

        <div className="title-wannasurf">
          <h1>WANNA<span className="logo-color">SURF</span></h1>
        </div>
            
        <div className="bruger-menu">
                <ul className="navbar-links-public">
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
                </ul>  
                <button className="navbar-burger" onClick={handleShowLinks}>
                  <span className="burger-bar"></span>
                </button> 
        </div>
      </nav>
    )
}
