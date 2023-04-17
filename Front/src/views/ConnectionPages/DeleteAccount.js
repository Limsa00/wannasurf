import './Sign.css'
import React, {useState, useContext} from "react";
import { UserContext } from '../../context/UserContext';
import Button from '../../components/UI/Button';
import { useNavigate } from 'react-router';
import { EmailAuthProvider, reauthenticateWithCredential, deleteUser } from '@firebase/auth';

export const DeleteAccount = () => {

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");
    const [sendReset, setSendReset] = useState("");
    const [pwd, setPwd] = useState('')
    const {currentUser} = useContext(UserContext)

    const reauthenticate = (pwd) => {
        const user = currentUser
        const credential = EmailAuthProvider.credential(user.email, pwd)
        console.log(user)
        console.log(credential)

        reauthenticateWithCredential(user, credential).then(() => {
            try {
                deleteUser(
                    user
                ).then(
                    setSendReset("Votre compte a bien été supprimé"))
                navigate("/wannasurf/home")
            } catch (err) {
                console.log(err)
                setValidation('')
            }
        }).catch((error) => {
            console.log(error)
        });
}
    const handleForm = async e => {
        e.preventDefault()

        reauthenticate(pwd)
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
                            onClick={() => { }}>
                            Supprimer votre compte
                        </Button> <span className='success'>{sendReset}</span>

                    </form>
                </div>
            </>
        )
}