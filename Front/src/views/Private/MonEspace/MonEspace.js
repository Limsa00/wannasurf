import './MonEspace.css'
import { Link } from "react-router-dom"
import Button from '../../../components/UI/Button'

export const MonEspace = () => {

    return (
    
        <div className="espace-bloc">
            <Link to="/wannasurf/monProfil" >
                <Button>
                    Mon profil
                </Button>
            </Link>
            <Link to="/wannasurf/mesFutursTrajets">
                <Button>
                    Mes futurs trajets
                </Button>
            </Link>
            <Link to="/wannasurf/monHistorique">
                <Button>
                    Historique des trajets
                </Button>
            </Link>
        </div>
        )
    }


