/**
 * Rend la vue pour afficher le profil utilisateur.
 * Affiche les informations personnelles de l'utilisateur connecté.
 */
import './MyProfil.css'
import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContext';
import { Link } from "react-router-dom";
import Button from '../../../components/UI/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'; 
import dateFormat from "dateformat";
import axios from 'axios';
import { Navbar } from '../../../components/NavBar/NavBar';
import { Footer } from '../../../components/Footer/Footer';
import { Error } from '../../../components/ErrorComponent/Error';
import { Loader } from '../../../components/Loader/Loader';

/**
 * @returns {JSX.Element} Le composant MyProfil.
 */
export const MyProfil = () => {
    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);
    
    const {currentUser} = useContext(UserContext)
    const uid = currentUser.uid;
    
    /**
     * Récupère les informations de l'utilisateur en utilisant l'UID fourni.
     */
        React.useEffect(() => {
            axios
                .get(`http://localhost:5000/userUid/${uid}`)
                .then((response) => { setUser(response.data); })
                .catch(error => { setError(error); });
            },
        [uid]);
    
    if (error) return (<Error />);
    if (!user) return (<Loader />);

    return (

        <div className='profil-page'>
            <Navbar />
                <div className="profil-bloc">
                    <div className='title-profil-bloc'>
                        <h1 className='title-profil-style'>Mon profil wannaSurf</h1>
                    </div>
                <div className='row-desktop'>
                    <div className='bloc-profil-1'>
                        <div className='bloc-profil-user'>
                            <div className='icon'>
                            <AccountCircleIcon fontSize='large' />
                            </div>
                                <div className='name-profil'>
                                <p>{user.firstname} {user.lastname}</p>
                                <div className='img-round-profil'>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bloc-profil-2'>
                        <div className='bloc-mail-user'>
                            <div className='icon'>
                                <EmailIcon fontSize='large' />
                            </div>
                            <div className='mail-user'>
                                <p className="bold">Email</p>
                                <div className='bloc-value-mail'>
                                    <p>{currentUser.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='bloc-profil-3'>
                        <div className='bloc-birth-user'>
                            <div className='icon'>
                            <CakeIcon fontSize='large' />
                            </div>
                            <div className='birth-user'>
                                <p className="bold">Date de naissance</p>
                                <div className='bloc-value-birth'>
                                    <p>{dateFormat(user.birthday, "dd - mm - yyyy")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bloc-profil-4'>
                        <div className='bloc-mdp-user'>
                            <div className='icon'>
                            <PhoneIphoneIcon fontSize='large' />
                            </div>
                            <div className='phone-user'>
                                <p className='bold'>Numero de telephone</p>
                                <div className='bloc-value-phone'>
                                    <p>{ user.phone }</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bloc-profil-5'>
                        <div className='bloc-modif-picture-user'>
                            <div className='picture-user'>
                                <img className='img-style' src={`https://robohash.org/${user.firstname}.png`} alt='user-profil'></img>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className='bloc-profil-6'>
                        <div className='bloc-other'>
                            <div className='reset-pwd'>
                                <Link to='/resetPassword'>
                                    <button className='no-decoration center'>Mot de passe oublié ? Cliquez ici !</button>
                                </Link>
                            </div>

                            <div className='change-pwd'>
                                <Link to='/changePassword'>
                                    <button className='no-decoration center'>Changez votre mot de passe</button>
                                </Link>
                            </div>
                        <div className='delete-acc'>
                            <Link to='/DeleteAccount'>
                                <button className='no-decoration center'>Supprimer mon compte</button>
                            </Link>
                            </div>
                        </div>
                    </div>

                    <div className='center'>
                        <Link to="/">
                            <Button>
                                Retour à l'acceuil
                            </Button>
                        </Link>
                    </div>
                </div>
            <Footer />
        </div>
        )
    }