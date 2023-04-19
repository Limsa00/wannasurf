import "./footer.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export const Footer = () => {

     const [showElement, setShowElement] = useState('')
    
    useEffect(() => {
    function handleScroll() {
          // Check if the scroll exists and if it's not at the bottom
        if (document.documentElement.scrollHeight > (document.documentElement.scrollTop + window.innerHeight)) {
            // Hide the element
            setShowElement('');
        } else {
            // Show the element
            setShowElement('show-hide');
        }
        
    }         
    
    if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {

    window.addEventListener('scroll', handleScroll);
 
    } else {
            setShowElement('show-hide footer-position');
        }
    // Remove the event listener when the component unmounts
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
