import './Sign.css'
import React, {useCallback, useContext} from "react";
import app from '../../firebase.config';
import { AuthContext } from '../../Auth';
import { redirect, withRouter } from 'react-router-dom';

export const SignIn =  ({ history }) => {
    const handleLogin = useCallback(async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/wannasurf/monProfil");
            } catch {error} {
                alert(error);
            }
        }, [history]);

        const {currentUser} = useContext(AuthContext);

        if (currentUser) {
            return <redirect to="/wannasurf/home" />;
        }

    return (
    
        <div className="connection-bloc">
            <h1 className='title'>Se connecter</h1>

            <div className='desc-inscription'>
                <p className='intro-texte'>Ride the wave !</p>
            </div>
            <form onSubmit={handleLogin} className='form'>

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