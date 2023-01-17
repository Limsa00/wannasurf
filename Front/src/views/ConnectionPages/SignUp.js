import './Sign.css'
import React, {useCallback} from "react";
import app from "../../base"

export const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/wannasurf/home");
        } catch {error} {
            alert(error);
        }
    }, [history]);

    return (
    
        <div className="inscription-bloc">
            <h1 className='title'>S'inscrire</h1>

            <div className='desc-inscription'>
                <p className='intro-texte'>Vous n'avez pas de compte ? Inscrivez-vous et rejoigné une grande communauté de surfer</p>
            </div>
            <form onSubmit={handleSignUp} className='form'>
                <input type="text" placeholder='pseudo'>

                </input>

                <input name="email" type="email" placeholder='Email'>
                    
                </input>

                <input name="password" type="password" placeholder='Mot de passe'>
                    
                </input>

                <input name="password" type="password" placeholder='Confirmez votre mot de passe'>
                    
                </input>

                <button type="submit" className="btn-style">
                    Créer mon trajet
                </button>

            </form>
        </div>
        )
    }