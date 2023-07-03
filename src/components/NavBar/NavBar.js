/**
 * Ce fichier définit le composant Navbar.
 * Il affiche la barre de navigation du site avec différents liens en fonction de l'état de connexion de l'utilisateur.
 * @module Navbar
*/

import "./navBar.css"
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase.config"
import { baseURL } from "../../config"
import NavFrame from "../NavFrame"

/**
 * Composant Navbar.
 * @returns {JSX.Element} Élément HTML représentant la Navbar en fonction de l'état de connexion de l'utilisateur.
 */
export const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false)

   /**
     * Gère l'affichage des liens de navigation.
     */
  const handleShowLinks = () =>
    setShowLinks(!showLinks)

  const {toggleModals} = useContext(UserContext)

  const navigate = useNavigate()

  /**
   * Fonction de déconnexion de l'utilisateur.
   * Utilise la méthode signOut de Firebase pour déconnecter l'utilisateur et redirige vers la page d'accueil.
   */
  const logOut = async () => {
    try {
      await signOut (auth)
      navigate("/wannasurf");
    } catch {
      alert("For some reason we can't log out, please check your internet connection and retry")
    }
  }

const {currentUser} = useContext(UserContext)

        if(currentUser) {
            return (
              <NavFrame>
              <li className="navbar-item" onClick={handleShowLinks}>
                <Link to="/wannasurf" className="navbar-link">
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
                      href="/wannasurf" className="navbar-link">
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
