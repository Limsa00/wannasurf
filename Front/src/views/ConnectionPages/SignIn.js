import './Sign.css'

export const SignIn = () => {

    return (
    
        <div className="connection-bloc">
            <h1 className='title'>Se connecter</h1>

            <div className='desc-inscription'>
                <p className='intro-texte'>Ride the wave !</p>
            </div>
            <form action='' className='form'>

                <input type="email" placeholder='Email'>
                    
                </input>

                <input type="password" placeholder='Mot de passe'>
                    
                </input>
                
                <button type="submit" className="btn-style">
                    Créer mon trajet
                </button>
                
            </form>
        </div>
        )
    }