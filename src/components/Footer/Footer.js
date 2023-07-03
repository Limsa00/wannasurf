/**
 * Ce fichier définit le composant Footer.
 * Il affiche un élément de pied de page contenant des liens vers des informations légales et un formulaire de contact.
 * Le composant s'adapte dynamiquement en fonction du défilement de la page.
 * @module Footer
 */

import "./footer.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

/**
 * Composant Footer.
 * @returns {JSX.Element} Élément HTML représentant le Footer.
 */
export const Footer = () => {

     const [showElement, setShowElement] = useState('')
    
      /**
   * Effet de montage du composant.
   * Ajoute un écouteur d'événement de défilement pour gérer l'affichage du Footer en fonction de la position de la page.
   */
    useEffect(() => {
            /**
     * Fonction de gestion du défilement de la page.
     * Vérifie la position de défilement et affiche ou cache le Footer en conséquence.
     */
    function handleScroll() {
        if (document.documentElement.scrollHeight > (document.documentElement.scrollTop + window.innerHeight)) {
            setShowElement('');
        } else {
            setShowElement('show-hide');
        }
        
    }         
    
    if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {

    window.addEventListener('scroll', handleScroll);
 
    } else {
            setShowElement('show-hide footer-position');
        }
    // Quand l'utilisateur remonte sur la page on recache le footer
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
        <div id="footer" className={`footer-bloc ${showElement}`}>
            <div className="left-footer">
                <Link
                    to="/wannasurf/legalNotice"
                    className="link-style">
                    Informations légales
                </Link>
            </div>
            <div className="right-footer">
                <Link
                    to="/wannasurf/siteContact"
                    className="link-style">
                    Nous contacter
                </Link>
            </div>
        </div>
        )
    }
