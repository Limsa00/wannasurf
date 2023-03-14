import './MonEspace.css'
import { Link } from "react-router-dom"
import Button from '../../../components/UI/Button'
import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContext';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';

export const MonEspace = () => {

    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);
    
    const { currentUser } = useContext(UserContext)
    const uid = currentUser.uid;
    console.log(uid)

    React.useEffect(() => {

        axios
            .get(`http://localhost:5000/user/${uid}`)
            .then((response) => { setUser(response.data); })
            .catch(error => { setError(error); });
    },
        [uid]);
    
    if (error) return `Error: ${error.message}`;
    if (!user) return "Pas de user connecté :(";

    return (
        <>
            <div className='title-bloc'>
                <h1>MON ESPACE</h1>
                <p className='text-espace-intro'>Bienvenue, <span className='user-espace'>{user.firstname}</span></p>
            </div>
            
            <div className="espace-bloc">
                <div className='space-button'>
                    <Link to="/wannasurf/monProfil" >
                        <Button>
                            Mon profil
                        </Button>
                    </Link>
                </div>
                <div className='space-button'>
                    <Link to="/wannasurf/mesFutursTrajets">
                        <Button>
                            Mes futurs trajets
                        </Button>
                    </Link>
                </div>
                <div className='space-button'>
                    <Link to="/wannasurf/monHistorique">
                        <Button>
                            Historique des trajets
                        </Button>
                    </Link>
                </div>
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