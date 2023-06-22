/**
 * Vue SignUpModal.
 *
 * Cette vue affiche une fenêtre modale pour permettre à l'utilisateur de s'inscrire.
 *
 * @returns {SignUpModal} Retourne la vue SignUpModal.
*/

import './Sign.css'
import React, {useContext, useRef, useState} from "react";
import { UserContext } from '../../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import BackToHome from '../../components/BackArrow/BackToHome';
import InscImg from '../../images/insc-img-surf.jpg'
import Button from '../../components/UI/Button';

/**
 * Composant SignUpModal.
 *
 * @module SignUpModal
 * @returns {JSX.Element} L'élément JSX représentant la vue SignUpModal.
 */
export const SignUpModal = () => {

    const {modalState, toggleModals, signUp} = useContext(UserContext)

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

        const inputs = useRef([])
        const addInputs = el => {
            if(el && !inputs.current.includes(el)){
                inputs.current.push(el)
            }
        }
        const formRef = useRef();

        /**
         * Gestion de la soumission du formulaire.
         *
         * Cette fonction est appelée lors de la soumission du formulaire d'inscription.
         *
         * @param {object} e - L'événement de soumission du formulaire.
         */
        const handleForm = async e => {
            e.preventDefault()

            const email = inputs.current[0].value 
            const pwd = inputs.current[1].value 
            const pwdConfirm = inputs.current[2].value 

            if((pwd.length || pwdConfirm.length) <6) {
                setValidation("Votre mot de passe doit faire 6 caractères minimum")
                    return;
            }
            else if(pwd !== pwdConfirm) {
                setValidation("Vos mots de passe ne correspondent pas")
                    return;
            }

            try {
                
                const cred = await signUp (
                    email,
                    pwd
                )
                    await sendEmailVerification(cred.user)
                    formRef.current.reset();
                    setValidation("")
                    // console.log(cred)
                    navigate("/sinscrire/complements")
            }  catch (err) {
                if(err.code === "auth/invalid-email") {
                    setValidation("Votre mail n'est pas valide")
                }

                if(err.code === "auth/email-already-in-use") {
                    setValidation("Votre email est deja utilisé")
                }
            }
        }
    
        /**
         * Fermeture de la fenêtre modale.
         */
        const closeModal = () => {
            setValidation("")
            toggleModals("close")
        }

    return (
        <>
            <BackToHome />
            {modalState.signUpModal && (
                <div className="inscription-bloc">
                    <div className='desktop-bloc'>
                        <div className='col-desktop-1'>
                            <div className='image-position'>
                                <img src={InscImg} alt='illustration page inscription à wannasurf' className='size-pic'></img>
                            </div>
                            <div className='text-position'>
                                <h1 
                                    className='title'>
                                        S'inscrire
                                </h1>

                                <div className='desc-inscription'>
                                    <p 
                                        className='intro-texte'>
                                            Vous n'avez pas de compte ? Inscrivez-vous et rejoignez une grande communauté de surfers
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='inscrption-card-phone col-desktop-2'>
                            <div className='mobile'>
                                <h1 
                                    className='title'>
                                        S'inscrire
                                </h1>

                                <div className='desc-inscription'>
                                    <p 
                                        className='intro-texte'>
                                            Vous n'avez pas de compte ? Inscrivez-vous et rejoignez une grande communauté de surfers
                                    </p>
                                </div>
                            </div>
                            <form 
                                ref={formRef}
                                className='form'
                                onSubmit={handleForm}>

                                <input 
                                    required
                                    ref={addInputs}
                                    name="email" 
                                    type="email" 
                                    placeholder='Email'
                                    id="signUpEmail"
                                />

                                <input 
                                    required
                                    ref={addInputs}
                                    name="pwd" 
                                    type="password" 
                                    placeholder='Mot de passe'
                                    id="signUpPwd"          
                                />   

                                <input 
                                    required
                                    ref={addInputs}
                                    name="pwd" 
                                    type="password" 
                                    placeholder='Confirmez votre mot de passe'
                                    id="signUpReapeatPwd"  
                                /> <span className='err'>{validation}</span>    

                                <Button>
                                    S'inscrire
                                </Button>

                                <Link to='/seconnecter'>
                                    <button className='no-decoration center'>Deja inscrit ? Se connecter !</button>
                                </Link>

                                </form>
                            </div>
                        </div>
                </div>)}
            </>
        )
    }