import './Sign.css'
import React, {useState, useContext} from "react";
import { UserContext } from '../../context/UserContext';
import Button from '../../components/UI/Button';
import { useNavigate } from 'react-router';
import { EmailAuthProvider, reauthenticateWithCredential } from '@firebase/auth';

export const ChangePassword = () => {

    const navigate = useNavigate();

    const { changePasswordFirebase } = useContext(UserContext)
    const [newPassword, setNewPassword] = useState('')
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
                changePasswordFirebase(
                    user,
                    newPassword
                ).then(
                    setSendReset("Votre pwd a bien été changé"))
                navigate("/wannasurf/monProfil")
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
                        Changer son mot de passe
                    </h1>

                    <div className='desc-inscription'>
                        <p
                            className='intro-texte'>
                            Choisissez votre nouveau mot de passe, surfez de maniere securisé
                        </p>

                    </div>
                    <form
                        className='form'
                        onSubmit={handleForm}>

                        <input
                            required
                            name="pwd"
                            type="password"
                            placeholder='Old Password'
                            id="oldPwd"
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                        />
                    
                        <input
                            required
                            name="pwd"
                            type="password"
                            placeholder='New Password'
                            id="changePwd"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                        /> <span className='err'>{validation}</span>

                        <Button
                            onClick={() => { }}>
                            Changer mon mot de passe
                        </Button> <span className='success'>{sendReset}</span>

                    </form>
                </div>
            </>
        )
}