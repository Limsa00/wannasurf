import './Sign.css'
import React, {useState, useContext} from "react";
import { UserContext } from '../../context/UserContext';
import Button from '../../components/UI/Button';
import { useNavigate } from 'react-router';

export const ResetPassword = () => {

    const navigate = useNavigate();

    const {forgotPassword} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [validation, setValidation] = useState("");
    const [sendReset, setSendReset] = useState("");

    const handleForm = async e => {
            e.preventDefault()

            try {
                
                await forgotPassword (
                    email,
                ).then(
                    setSendReset("Un mail vous a ete envoyé"))
                    navigate("/wannasurf/seconnecter")
            } catch (err) {
                    console.log(err)
                    setValidation("Woops, votre email est incorrect !")
        }
    };

    return (
        <>
                <div className="inscription-bloc">
                    
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