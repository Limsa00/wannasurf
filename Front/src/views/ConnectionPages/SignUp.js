import './Sign.css'

export const SignUp = () => {

    return (
    
        <div className="inscription-bloc">
            <h1 className='title'>S'inscrire</h1>

            <div className='desc-inscription'>
                <p className='intro-texte'>Vous n'avez pas de compte ? Inscrivez-vous et rejoigné une grande communauté de surfer</p>
            </div>
            <form action='' className='form'>
                <input type="text" placeholder='pseudo'>

                </input>

                <input type="email" placeholder='Email'>
                    
                </input>

                <input type="password" placeholder='Mot de passe'>
                    
                </input>

                <input type="password" placeholder='Confirmez votre mot de passe'>
                    
                </input>

                <button type="submit" className="btn-style">
                    Créer mon trajet
                </button>

            </form>
        </div>
        )
    }