import "./footer.css"

export const Footer = () => {
    return (
        <div id="footer" className="footer-bloc">
            <div className="left-footer">
                <a href="/wannasurf/src/views/legalNotice.js" className="link-style">Informations légales</a>
            </div>
            <div className="right-footer">
                <a href="/wannasurf/src/views/siteContact.js" className="link-style">Nous contacter</a>
            </div>
        </div>
    )
}