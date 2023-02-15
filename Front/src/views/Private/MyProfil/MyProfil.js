import './MyProfil.css'
import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContext';
import { Link } from "react-router-dom";
import Button from '../../../components/UI/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import axios
    from 'axios';
export const MyProfil = () => {

    
    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);
    
    const {currentUser} = useContext(UserContext)
    console.log("route de: ", currentUser )
    const uid = currentUser.uid;

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
    
        <div className="profil-bloc">
            <div className='title-profil-bloc'>
                <h1 className='title-profil-style'>Mon profil wannaSurf</h1>
            </div>
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
                            <p>{user.birthday}</p>
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
                            <div className='bloc-value-phone'>
                            <Button className='button-img'>Modifier ma photo</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bloc-profil-6'>
                <div className='bloc-other'>
                    <div className='reset-pwd'>
                        <p>Réinitialiser mon mot de passe</p>
                    </div>
                    <div className='delete-acc'>
                        <p>Supprimer mon compte</p>
                    </div>
                </div>
            </div>

            <Link to="/wannasurf/home">
                        <Button>
                            Retour à l'acceuil
                        </Button>
            </Link>
        </div>

        )
    }