import "./navBar.css"
import logoWannaSurf from "../../images/logoWannaSurf.png"
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase.config"
import NavFrame from "../NavFrame"

export const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () =>
    setShowLinks(!showLinks)

  const {toggleModals} = useContext(UserContext)

  const navigate = useNavigate()

  // Constante pour deconnecté le user utilisant la methode firebase signOut avec en parametre auth
  const logOut = async () => {
    try {
      await signOut (auth)
      navigate("/")
    } catch {
      alert("For some reason we can't log out, please check your internet connection and retry")
    }
  }

const {currentUser} = useContext(UserContext)

        if(currentUser) {
            return (
              <NavFrame>
              <li className="navbar-item" onClick={handleShowLinks}>
                <Link to="/" className="navbar-link">
                <button className="navbar-link">
                  Home
                </button>
                </Link>
              </li>
              <li className="navbar-item" onClick={handleShowLinks}>
                <Link to="/private/monEspace" className="navbar-link">
                  <button className="navbar-link">
                    Mon espace
                  </button>
                </Link>
              </li>
              <li className="navbar-item" onClick={handleShowLinks}>
                <Link to="/createTraject" className="navbar-link">
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
              </NavFrame>
          )
        }

    return (
        <NavFrame>
                  <li className="navbar-item" onClick={handleShowLinks}>
                    <Link to="/sinscrire">
                    <button onClick={() => toggleModals("SignUp")} className="navbar-link">
                      S'inscrire
                    </button>
                    </Link>
                  </li>
                  <li className="navbar-item" onClick={handleShowLinks}>
                    <Link to="/seconnecter"> 
                    <button onClick={() => toggleModals("SignIn")} className="navbar-link">
                      Se connecter
                    </button>
                    </Link>
                  </li>
        </NavFrame>
    )
}
