import './Sign.css'
import React, {useContext, useRef, useState} from "react";
import { UserContext } from '../../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import BackToHome from '../../components/BackArrow/BackToHome';
import InscImg from '../../images/insc-img-surf.jpg'
import Button from '../../components/UI/Button';

export const SignUpModal = () => {

    const {modalState, toggleModals, signUp} = useContext(UserContext)

    const navigate = useNavigate();

    console.log('signUp from signUpModal : ',signUp);

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

            const email = inputs.current[0].value 
            const pwd = inputs.current[1].value 
            const pwdConfirm = inputs.current[2].value 

            if((pwd.length || pwdConfirm.length) <6) {
                setValidation("6 characters min")
                    return;
            }
            else if(pwd !== pwdConfirm) {
                setValidation("Password do not match")
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