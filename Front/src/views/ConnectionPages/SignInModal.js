import './Sign.css'
import React, {useContext, useRef, useState} from "react";
import { UserContext } from '../../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/UI/Button';

export const SignInModal = () => {

    const {modalState, toggleModals, signIn} = useContext(UserContext);

    const navigate = useNavigate();

    console.log('signIn from signInModal : ', signIn);

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

            try {                
                const cred = await signIn (
                    inputs.current[0].value,
                    inputs.current[1].value
                )
                    formRef.current.reset();
                    setValidation("")
                    toggleModals("close")
                    navigate("/wannasurf/home")

            }  catch (err) {
                    console.log(err)
                    setValidation("Woops, votre email ou votre mot de passe est incorrect !")
        }
    };

        const closeModal = () => {
            setValidation("")
            toggleModals("close")
        };

    return (
        <>
            {modalState.signInModal && (
                <div className="inscription-bloc">                    
                    <h1 
                        className='title'>
                            Se Connecter
                    </h1>

                    <div className='desc-inscription'>
                        <p 
                            className='intro-texte'>
                            Ride the wave !                        
                        </p>
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
                            id="signInEmail"
                        />

                        <input 
                            required
                            ref={addInputs}
                            name="pwd" 
                            type="password" 
                            placeholder='Mot de passe'
                            id="signInPwd"          
                        /> <span className='err'>{validation}</span>    

                        <Link to='/wannasurf/resetPassword'>
                            <button className='no-decoration center'>Mot de passe oublié ? Cliquez ici !</button>
                        </Link>
                        

                        <Button
                            onClick={() => {}}>
                            Se Connecter
                        </Button>
                    </form>

                </div>)}
            </>
        )
    }
