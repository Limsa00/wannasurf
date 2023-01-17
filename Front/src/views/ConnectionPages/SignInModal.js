import './Sign.css'
import React, {useCallback, useContext} from "react";
import app from '../../firebase.config';

export const SignInModal =  () => {

    return (
    
        <div className="connection-bloc">
            <h1 className='title'>Se connecter</h1>

            <div className='desc-inscription'>
                <p className='intro-texte'>Ride the wave !</p>
            </div>
            <form className='form'>

                <input 
                    name="email" 
                    type="email" 
                    placeholder='Email'   
                    id="signInEmail"                    
                />

                <input 
                    name="password" 
                    type="password" 
                    placeholder='Mot de passe'
                    id="signInPwd"                    
                />
                
                <button 
                    type="submit" 
                    className="btn-style">
                    Se connecter
                </button>
                
            </form>
        </div>
        )
    }