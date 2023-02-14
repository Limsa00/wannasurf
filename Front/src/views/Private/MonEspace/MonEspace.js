import './MonEspace.css'
import { Link } from "react-router-dom"
import Button from '../../../components/UI/Button'
import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContext';
import HomeIcon from '@mui/icons-material/Home';

export const MonEspace = () => {

    const {currentUser} = useContext(UserContext)

    return (
        <>
            <div className='title-bloc'>
                <h1>MON ESPACE</h1>
                    <p className='text-espace-intro'>Bienvenue, <span className='user-espace'>{currentUser.email}</span></p>
            </div>
            
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

                <div className='home-back'>
                    <Link to="/wannasurf/home">
                            <Button>
                                Accueil
                                <span className='icon-home'>
                                    <HomeIcon />
                                </span>
                            </Button>
                    </Link>
                </div>
        </>
        )
    }


