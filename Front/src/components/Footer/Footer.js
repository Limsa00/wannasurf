import "./footer.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export const Footer = () => {

     const [showElement, setShowElement] = useState('')
    
    useEffect(() => {
    function handleScroll() {
          // On verifie qu'il y a un scroll et que l'utilisateur n'est pas en bas de page
        if (document.documentElement.scrollHeight > (document.documentElement.scrollTop + window.innerHeight)) {
            // on cache l'element si cest le cas
            setShowElement('');
        } else {
            // Sinon on montre l'element
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
                    to="/legalNotice"
                    className="link-style">
                    Informations légales
                </Link>
            </div>
            <div className="right-footer">
                <Link
                    to="/siteContact"
                    className="link-style">
                    Nous contacter
                </Link>
            </div>
        </div>
        )
    }
