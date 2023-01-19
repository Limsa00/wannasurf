import './MonEspace.css'
import { Link } from "react-router-dom"

export const MonEspace = () => {

    return (
    
        <div className="espace-bloc">
            <Link to="/wannasurf/monProfil" >
                <button type="submit" className="btn-space">Mon profil</button>
            </Link>
            <Link to="/wannasurf/mesFutursTrajets">
                <button type="submit" className="btn-space">Mes futurs trajets</button>
            </Link>
            <Link to="/wannasurf/monHistorique">
                <button type="submit" className="btn-space">Historique des trajets</button>
            </Link>
        </div>
        )
    }


