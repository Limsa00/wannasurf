import "./footer.css"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div id="footer" className="footer-bloc">
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