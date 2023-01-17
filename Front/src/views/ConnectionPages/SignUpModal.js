import './Sign.css'
import React, {useContext, useRef, useState} from "react";
import { UserContext } from '../../components/UserContext';

export const SignUpModal = () => {

    const {modalState, toggleModals, SignUp} = useContext(UserContext)

    console.log(SignUp)

    const [validation, setValidation] = useState("");

        const inputs = useRef([])
        const addInputs = el => {
            if(el && !inputs.current.includes(el)){
                inputs.current.push(el)
            }
        }

        const handleForm = e => {
            e.preventDefault()

            if((inputs.current[2].value.length || inputs.current[3].value.length) <6) {
                setValidation("6 characters min")
                    return;
            }
            else if(inputs.current[2].value !== inputs.current[3].value) {
                setValidation("Password do not match")
                    return
            }

            try {

            }  catch (err) {
                
            }
        }

    return (
        <>
            {modalState.SignUp && (
                <div 
                    className="inscription-bloc" 
                    onClick={() => toggleModals("close")}>
                    
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
                        className='form'
                        onSubmit={handleForm}>
                        <input 
                            ref={addInputs}
                            name="psuedonyme"
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
                        /> <p>{validation}</p>    

                        <input 
                            required
                            ref={addInputs}
                            name="password" 
                            type="password" 
                            placeholder='Confirmez votre mot de passe'
                            id="signUpReapeatPwd"  
                        /> <p>{validation}</p>    

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