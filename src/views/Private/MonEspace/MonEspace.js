/**
 * Rend la vue pour afficher l'espace utilisateur.
 * Affiche les informations et les options pour l'utilisateur connecté.
 */
import './MonEspace.css'
import { Link } from "react-router-dom"
import Button from '../../../components/UI/Button'
import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContext';
import HomeIcon from '@mui/icons-material/Home';
import { sendEmailVerification } from 'firebase/auth';
import axios from 'axios';
import { Navbar } from '../../../components/NavBar/NavBar';
import { Footer } from '../../../components/Footer/Footer';
import Desk_illustration from '../../../images/img_mon_espace.jpg'
import { Loader } from '../../../components/Loader/Loader';
import { Error } from '../../../components/ErrorComponent/Error';
import { toast } from 'react-toastify';
import { baseURL } from '../../../config';

/**
 * @returns {JSX.Element} Le composant MonEspace.
 */
export const MonEspace = () => {
    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);

    let blocVerif = ''
    
    const { currentUser } = useContext(UserContext)
    const uid = currentUser.uid;
    const emailVerified = currentUser.emailVerified
    
    /**
    * Affiche une notification de succès d'envoi de l'e-mail de vérification.
    */
    let notify = () => toast.success("Un email de confirmation vous a été envoyé ! ", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    })

    /**
   * Affiche une notification d'erreur lors de l'envoi de l'e-mail de vérification.
   */
    const notifyErr = () => toast.error("Une erreur est survenu, reessayer plus tard ", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })

    if (emailVerified === false) {
            blocVerif =
                <div className='bloc-verif'>
                    <p className='text-email'>Votre email n'a pas encore été validé, cliquez ici pour le valider ! </p>
                    <Button
                        onClick={() =>
                            sendEmailVerification(currentUser)
                            .then(notify)
                            .catch(notifyErr)
                        }>
                        Verifier votre email
                    </Button>
            </div>
        }

        /**
        * Récupère les informations de l'utilisateur en utilisant l'UID fourni.
        */
        React.useEffect(() => {

            axios
                .get(baseURL + `/userUid/${uid}`)
                .then((response) => { setUser(response.data); })
                .catch(error => { setError(error); });
        },
            [uid]);
    
    if (error) return (<Error />);
    if (!user) return (<Loader />);

    return (
        <div className='mon-espace-page'>
            <Navbar />
                <div className='title-bloc'>
                    <h1>MON ESPACE</h1>
                        <div className='intro'>
                            <p className='text-espace-intro'>Bienvenue,
                            <span className='user-espace'>{user.lastname}</span></p>
                            {blocVerif}
                        </div>
                </div>
                
                <div className='desk-div'>
                    <div className='left-desk'>
                        <img src={Desk_illustration} className="style-img" alt="illustration desktop pour mon espace" />
                    </div>
                
                    <div className='right-desk'>
                        <div className="espace-bloc">
                            <div className='space-button'>
                                <Link to="/monProfil" >
                                    <Button>
                                        Mon profil
                                    </Button>
                                </Link>
                            </div>
                            <div className='space-button'>
                                <Link to="/mesFutursTrajets">
                                    <Button>
                                        Mes futurs trajets
                                    </Button>
                                </Link>
                            </div>
                            <div className='space-button'>
                                <Link to="/monHistorique">
                                    <Button>
                                        Historique des trajets
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className='space-button home-back'>
                            <Link to="/">
                                    <Button>
                                        Accueil
                                        <span className='icon-home'>
                                            <HomeIcon />
                                        </span>
                                    </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }