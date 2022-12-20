import "./navBar.css"
import logoWannaSurf from "../images/logoWannaSurf.png"

export const Navbar = () => {
    return (
      <nav className="nav-bar-bloc">
        <div className="logo">
            <img src={logoWannaSurf} alt="logo la startup wannaSurf" className="logo-param" />
        </div>

        <div className="title">
        <h1>WANNASURF</h1>
        </div>

        <div className="bruger-menu">

</div>
      </nav>
    )
}