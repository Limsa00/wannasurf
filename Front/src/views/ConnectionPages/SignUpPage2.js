import './Sign.css'
import React, {useContext, useRef, useState} from "react";
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';
import axios from 'axios';

export const SignUpInfo = () => {

    const {currentUser} = useContext(UserContext)
        console.log("route de: ", currentUser )
    
    const uid = currentUser.uid;
    console.log(uid)

        const [name, setName] = useState ("");
        const [surname, setSurname] = useState ("");
        const [gender, setGender] = useState ("");

        const handleForm = (evt) => {
            // On empeche le formulaire de recharger notre application
            evt.preventDefault()
            // on crée une constante newTraject pour l'envoyer au back avec axios par la suite
            const newUser = { 
                lastname: name,
                firstname: surname,
                gender: gender,
                city_id: 1,
                uid: uid
            };
    
            axios
                .post('http://localhost:5000/user', newUser)
        }

    return (
        <>
                <div className="inscription-bloc">
                    
                    <h1 
                        className='title'>
                            Plus qu'une etape pour acceder à votre compte
                    </h1>

                    <div className='desc-inscription'>
                        <p 
                            className='intro-texte'>
                                Rentrez vos informations
                        </p>
                    </div>

                    <form 
                        className='form'
                        onSubmit={handleForm}>

                        <input 
                            required
                            name="name" 
                            type="text" 
                            placeholder='Nom'
                            id="signUpName"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <input 
                            required
                            name="surname" 
                            type="text" 
                            placeholder='Prenom'
                            id="signUpSurname"
                            value={surname}
                            onChange={e => setSurname(e.target.value)}          
                        />   

                        <input 
                            required
                            name="gender" 
                            type="text" 
                            placeholder='Genre'
                            id="signUpGenre"
                            value={gender}
                            onChange={e => setGender(e.target.value)}          
                        />   

                    <Link to="/wannasurf/home">
                        <Button>
                            Completer mon profil
                        </Button>
                    </Link>

                    </form>
                </div>
            </>
        )
    }