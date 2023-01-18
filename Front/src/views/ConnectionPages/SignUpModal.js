import './Sign.css'
import React, {useContext, useRef, useState} from "react";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const SignUpModal = () => {

    const {modalState, toggleModals, signUp} = useContext(UserContext)

    const navigate = useNavigate();

    console.log(signUp)

    const [validation, setValidation] = useState("");

        const inputs = useRef([])
        const addInputs = el => {
            if(el && !inputs.current.includes(el)){
                inputs.current.push(el)
            }
        }
        const formRef = useRef();

        const handleForm = async e => {
            e.preventDefault()

            if((inputs.current[2].value.length || inputs.current[3].value.length) <6) {
                setValidation("6 characters min")
                    return;
            }
            else if(inputs.current[2].value !== inputs.current[3].value) {
                setValidation("Password do not match")
                    return;
            }

            try {
                
                const cred = await signUp (
                    inputs.current[0].value,
                    inputs.current[1].value
                )
                    formRef.current.reset();
                    setValidation("")
                    // console.log(cred)
                    navigate("/wannasurf/private/monEspace")

            }  catch (err) {
                if(err.code === "auth/invalid-email") {
                    setValidation("Email format invalid")
                }

                if(err.code === "auth/email-already-in-use") {
                    setValidation("Email deja utilisé")
                }
            }
        }

        const closeModal = () => {
            setValidation("")
            toggleModals("close")
        }

    return (
        <>
            {modalState.signUpModal && (
                <div className="inscription-bloc">
                    
                    <h1 
                        className='title'>
                            S'inscrire
                    </h1>

                    <div className='desc-inscription'>
                        <p 
                            className='intro-texte'>
                                Vous n'avez pas de compte ? Inscrivez-vous et rejoigné une grande communauté de surfer
                        </p>
                    </div>
                    <form 
                        ref={formRef}
                        className='form'
                        onSubmit={handleForm}>
                        <input 
                            ref={addInputs}
                            name="pseudonyme"
                            required
                            type="text" 
                            placeholder='pseudo'
                            id="signUpPseudo"
                        />

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
                            name="password" 
                            type="password" 
                            placeholder='Mot de passe'
                            id="signUpPwd"          
                        />   

                        <input 
                            required
                            ref={addInputs}
                            name="password" 
                            type="password" 
                            placeholder='Confirmez votre mot de passe'
                            id="signUpReapeatPwd"  
                        /> <span className='err'>{validation}</span>    

                        <button 
                            type="submit" 
                            className="btn-style">
                            S'inscrire
                        </button>

                    </form>
                </div>)}
            </>
        )
    }