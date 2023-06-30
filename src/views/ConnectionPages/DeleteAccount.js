/**
 * @module deleteAccount
 * @description Vue pour supprimer un compte utilisateur.
*/

import './Sign.css'
import axios from 'axios';
import React, {useState, useContext} from "react";
import { UserContext } from '../../context/UserContext';
import Button from '../../components/UI/Button';
import BackToHome from '../../components/BackArrow/BackToHome';
import { useNavigate } from 'react-router';
import { EmailAuthProvider, reauthenticateWithCredential, deleteUser } from '@firebase/auth';
import { baseURL } from '../../config';

/**
 * Composant de la vue de suppression de compte utilisateur.
 * @returns {JSX.Element} Composant de suppression de compte.
 */

export const DeleteAccount = () => {
    /**
     * Fonction pour déclencher la redirection vers la page d'accueil après la suppression du compte.
     */
    function TimerDelete () {
        console.log(TimerDelete)
        let timerIDelete = setTimeout(() => {
            clearTimeout(timerIDelete)
            navigate('/')
        }, 2000);
    }

    const navigate = useNavigate();

    const [, setValidation] = useState("");
    const [sendReset, setSendReset] = useState("");
    const [pwd, setPwd] = useState('')
    const {currentUser} = useContext(UserContext)
    const [, setError] = React.useState(null);

    /**
     * Fonction pour réauthentifier l'utilisateur avant la suppression du compte.
     * @param {string} pwd - Mot de passe de l'utilisateur.
     */
    const Reauthenticate = (pwd) => {
        const user = currentUser
        const credential = EmailAuthProvider.credential(user.email, pwd)
        const uid = currentUser.uid;

        reauthenticateWithCredential(user, credential)
        .then(() => {
                try {
                    deleteUser(
                        user
                    )
                } catch (err) {
                    console.log(err)
                    setValidation('')
                }
            })
        .then ( async () => {
                    try {
                        await axios
                            .get(baseURL + `/userUid/${uid}`)
                            .then((response) => {
                                //setUser(response.data.id);
                                axios
                                    .patch(baseURL + `/user/deactivate/${response.data.id}`)
                                    .then((response) => { TimerDelete(); setSendReset("Votre compte a bien été supprimé, vous allez être redirigé sur la page d'acceuil") })
                                    .catch(error => { setError(error) });
                            })
                            .catch(error => { setError(error) });
                    } catch (error) {
                        console.error(error);
                    }
                }
            )
        

    }
    /**
     * Gestionnaire de soumission du formulaire.
     * @param {Event} e - Événement de soumission du formulaire.
     */
    const handleForm = async e => {
        e.preventDefault()

        Reauthenticate(pwd)
    }

        return (
            <>
                <div className="inscription-bloc">
                    <BackToHome />
                    <h1
                        className='title'>
                        Supprimez votre compte
                    </h1>

                    <div className='desc-inscription'>
                        <p
                            className='intro-texte'>
                            Saisir votre mot de passe pour confirmer la suppression de votre compte
                        </p>

                    </div>
                    <form
                        className='form'
                        onSubmit={handleForm}>

                        <input
                            required
                            name="pwd"
                            type="password"
                            placeholder='Mot de passe'
                            id="oldPwd"
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                        />

                        <Button>
                            Supprimer votre compte
                        </Button> <span className='success'>{sendReset}</span>

                    </form>
                </div>
            </>
        )
}