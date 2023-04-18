import './Sign.css'
import axios from 'axios';
import React, {useState, useContext, useEffect} from "react";
import { UserContext } from '../../context/UserContext';
import Button from '../../components/UI/Button';
import { useNavigate } from 'react-router';
import { EmailAuthProvider, reauthenticateWithCredential, deleteUser } from '@firebase/auth';

export const DeleteAccount = () => {

    function TimerDelete () {
            console.log(TimerDelete)
            let timerIDelete = setTimeout(() => {
                clearTimeout(timerIDelete)
                navigate('/wannasurf/home')
            }, 2000);
    }


    const navigate = useNavigate();

    const [validation, setValidation] = useState("");
    const [sendReset, setSendReset] = useState("");
    const [pwd, setPwd] = useState('')
    const {currentUser} = useContext(UserContext)
    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);
    
    const Reauthenticate = (pwd) => {
        const user = currentUser
        const credential = EmailAuthProvider.credential(user.email, pwd)
        console.log(user)
        console.log(credential)
        const uid = currentUser.uid;

    reauthenticateWithCredential(user, credential).then(() => {
            try {
                deleteUser(
                    user
                )
            } catch (err) {
                console.log(err)
                setValidation('')
            }
        },
                        // async () => {
                        //     try {
                        //         await axios
                        //             .get(`http://localhost:5000/userUid/${uid}`)
                        //             .then((response) => {
                        //                 //setUser(response.data.id);
                        //             axios
                        //                 .patch(`http://localhost:5000/user/deactivate/${response.data.id}`)
                        //                 .then((response) => { console.log(response) })
                        //                 .catch(error => { setError(error) });
                        //                 })
                        //             .catch(error => { setError(error) });
                        //     } catch (error) {
                        //         console.error(error);
                        //     }
                        //     }

                )
                    navigate("/wannasurf/home")
                    }

    const handleForm = async e => {
        e.preventDefault()

        Reauthenticate(pwd)
    }

        return (
            <>
                <div className="inscription-bloc">
                    
                    <h1
                        className='title'>
                        Supprimez votre compte
                    </h1>

                    <div className='desc-inscription'>
                        <p
                            className='intro-texte'>
                            Saisir votre mot de passe pour confirmer la suppression de votre compte
                        </p>

                    </div>
                    <form
                        className='form'
                        onSubmit={handleForm}>

                        <input
                            required
                            name="pwd"
                            type="password"
                            placeholder='Mot de passe'
                            id="oldPwd"
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                        />

                        <Button
                            onClick={TimerDelete}>
                            Supprimer votre compte
                        </Button> <span className='success'>{sendReset}</span>

                    </form>
                </div>
            </>
        )
}