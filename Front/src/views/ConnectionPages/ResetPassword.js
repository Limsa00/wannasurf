
/**
*
*Vue ResetPassword.
*Cette vue permet à l'utilisateur de réinitialiser son mot de passe.
*@returns {ResetPassword} Retourne la vue ResetPassword.
*/

import './Sign.css'
import React, {useState, useContext} from "react";
import { UserContext } from '../../context/UserContext';
import Button from '../../components/UI/Button';
import BackToHome from '../../components/BackArrow/BackToHome';
import { useNavigate } from 'react-router';

/**
*
*Composant ResetPassword.
*@module ResetPassword
*@returns {JSX.Element} L'élément JSX représentant la vue ResetPassword.
*/
export const ResetPassword = () => {

    const navigate = useNavigate();

    const {forgotPassword} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [validation, setValidation] = useState("");
    const [sendReset, setSendReset] = useState("");

    /**
    *
    *Gestion de la soumission du formulaire.
    *Cette fonction est appelée lors de la soumission du formulaire de réinitialisation du mot de passe.
    *@param {object} e - L'événement de soumission du formulaire.
    */
    const handleForm = async e => {
            e.preventDefault()

            try {
                
                await forgotPassword (
                    email,
                ).then(
                    setSendReset("Un mail vous a ete envoyé"))
                    navigate("/seconnecter")
            } catch (err) {
                    console.log(err)
                    setValidation("Woops, votre email est incorrect !")
        }
    };

    return (
        <>
                <div className="inscription-bloc">
                    <BackToHome />
                    <h1 
                        className='title'>
                            Reinitialiser son mot de passe
                    </h1>

                    <div className='desc-inscription'>
                        <p 
                            className='intro-texte'>
                            Votre mot de passe a bu la tasse ? Reinitialisez-le !                        
                        </p>

                    </div>
                    <form 
                    className='form'
                    onSubmit={handleForm}>

                        <input 
                            required
                            name="email" 
                            type="email" 
                            placeholder='Email'
                            id="resetEmail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                    /> <span className='err'>{ validation }</span>    

                        <Button
                            onClick={() => {}}>
                            Reinitialiser mon mot de passe
                        </Button> <span className='success'>{ sendReset }</span> 

                    </form>
                </div>
            </>
        )
    }