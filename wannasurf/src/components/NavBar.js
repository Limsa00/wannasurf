import "./navBar.css"
import logoWannaSurf from "../images/logoWannaSurf.png"
import hamburgerMenu from "../images/hamburger-menu.png"

export const Navbar = () => {
    return (
      <nav className="nav-bar-bloc">
        <div className="logo">
            <img src={logoWannaSurf} alt="logo la startup wannaSurf" className="logo-param" />
        </div>

        <div className="title">
        <h1>WANNA<span className="logo-color">SURF</span></h1>
        </div>
            
        <div className="bruger-menu">
                <img src={hamburgerMenu} alt="hamburger-button" className="hamburger-style" />
        </div>
      </nav>
    )
}