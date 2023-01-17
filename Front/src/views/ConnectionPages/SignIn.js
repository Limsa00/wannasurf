import './Sign.css'
import React, {useCallback, useContext} from "react";
import app from '../../firebase.config';

export const SignIn =  () => {

    return (
    
        <div className="connection-bloc">
            <h1 className='title'>Se connecter</h1>

            <div className='desc-inscription'>
                <p className='intro-texte'>Ride the wave !</p>
            </div>
            <form className='form'>

                <input name="email" type="email" placeholder='Email'>
                    
                </input>

                <input name="password" type="password" placeholder='Mot de passe'>
                    
                </input>
                
                <button type="submit" className="btn-style">
                    Créer mon trajet
                </button>
                
            </form>
        </div>
        )
    }