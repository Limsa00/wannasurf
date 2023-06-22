/**
 * 
 * Vue ChangePassword.
 *
 * Cette vue permet à l'utilisateur de changer son mot de passe.
 *
 * @returns {JSX.Element} Retourne la vue ChangePassword.
 */

import './Sign.css'
import React, {useState, useContext} from "react";
import { UserContext } from '../../context/UserContext';
import Button from '../../components/UI/Button';
import BackToHome from '../../components/BackArrow/BackToHome';
import { useNavigate } from 'react-router';
import { EmailAuthProvider, reauthenticateWithCredential } from '@firebase/auth';

export const ChangePassword = () => {

    const navigate = useNavigate();

    const { changePasswordFirebase } = useContext(UserContext)
    const [newPassword, setNewPassword] = useState('')
    const [validation, setValidation] = useState("");
    const [sendReset, setSendReset] = useState("");
    const [pwd, setPwd] = useState('')
    const {currentUser} = useContext(UserContext)

    /**
     * Réauthentification de l'utilisateur.
     *
     * Cette fonction permet de réauthentifier l'utilisateur en utilisant son mot de passe actuel.
     *
     * @param {string} pwd - Le mot de passe actuel de l'utilisateur.
     */
    const reauthenticate = (pwd) => {
        const user = currentUser
        const credential = EmailAuthProvider.credential(user.email, pwd)

        reauthenticateWithCredential(user, credential).then(() => {
            try {
                changePasswordFirebase(
                    user,
                    newPassword
                ).then(
                    setSendReset("Votre pwd a bien été changé"))
                navigate("/monProfil")
            } catch (err) {
                console.log(err)
                setValidation('')
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    /**
     * Gestion de la soumission du formulaire.
     *
     * Cette fonction est appelée lors de la soumission du formulaire de changement de mot de passe.
     *
     * @param {object} e - L'événement de soumission du formulaire.
     */
    const handleForm = async e => {
        e.preventDefault()

        reauthenticate(pwd)
    }

        return (
            <>
                <div className="inscription-bloc">
                    <BackToHome />
                    <h1
                        className='title'>
                        Changer son mot de passe
                    </h1>

                    <div className='desc-inscription'>
                        <p
                            className='intro-texte'>
                            Choisissez votre nouveau mot de passe, surfez de maniere securisé
                        </p>

                    </div>
                    <form
                        className='form'
                        onSubmit={handleForm}>

                        <input
                            required
                            name="pwd"
                            type="password"
                            placeholder='Old Password'
                            id="oldPwd"
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                        />
                    
                        <input
                            required
                            name="pwd"
                            type="password"
                            placeholder='New Password'
                            id="changePwd"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                        /> <span className='err'>{validation}</span>

                        <Button
                            onClick={() => { }}>
                            Changer mon mot de passe
                        </Button> <span className='success'>{sendReset}</span>

                    </form>
                </div>
            </>
        )
}