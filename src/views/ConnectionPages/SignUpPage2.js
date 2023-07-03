import './Sign.css'
import React, {useContext, useState} from "react";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button';
import PhoneInput from 'react-phone-number-input';
import { validName, validPhone } from '../../components/Regex';
import 'react-phone-number-input/style.css';
import { baseURL } from '../../config';
const callApiModule = require('../../components/callApiModule');

/**
 * Vue représentant le formulaire d'inscription.
 *
 * @returns {JSX.Element} Élément JSX représentant le formulaire d'inscription.
 */
export const SignUpInfo = () => {

    const navigate = useNavigate();
    const {currentUser} = useContext(UserContext)
    const uid = currentUser.uid;

    const [send, setSend] = useState (Boolean);

    const [errormsg, Seterrormsg] = useState(false);
    const [errorNameMsg, setErrorNameMsg] = useState(false);
    const [errorSurnameMsg, setErrorSurnameMsg] = useState(false);
    const [errorPhoneMsg, setErrorPhoneMsg] = useState(false);
    const [errorGenderMsg, setErrorGenderMsg] = useState(false);

    const [name, setName] = useState ("");
    const [surname, setSurname] = useState ("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState ("");
    const [city,] = useState ("");
    const [birth, setBirth] = useState("");
    
  /**
   * Fonction de validation du formulaire.
   */
    const validate = () => {
      
        if (!validName.test(name)) {
            setErrorNameMsg(true);
        } else {
            setErrorNameMsg(false);
        }
        if (!validName.test(surname)) {
            setErrorSurnameMsg(true);
        } else {
            setErrorSurnameMsg(false);
        }
        if (gender !== "Homme" && gender !== "Femme" && gender !== "Autres") {
            setErrorGenderMsg(true);
        } else {
            setErrorGenderMsg(false);
        }
        if (name === "" || surname === "" || gender === "" || birth === "" || phoneNumber === "" || city === "") {
            Seterrormsg(true);
        } else {
            Seterrormsg(false)
        }
        if (!validPhone.test(phoneNumber)) {
            setErrorPhoneMsg(true);
        } else {
            setErrorPhoneMsg(false);
        }
        if (errormsg === false && errorNameMsg === false && errorSurnameMsg === false && errorPhoneMsg === false && errorGenderMsg === false) {
              setSend(true)
          }
        }     

    /**
     * Gestion de la soumission du formulaire.
     *
     * @param {Event} evt L'événement de soumission du formulaire.
     */
    const handleForm = (evt) => {
        evt.preventDefault()

        setSend(false)
        validate()

        const newUser = { 
            lastname: surname,
            firstname: name,
            gender: gender,
            phone: phoneNumber,
            birthday: birth,
            city_id: 1,
            uid: uid
        };

        const endpoint = baseURL + `/user`;
        if (send === true) {
        callApiModule(endpoint, "POST", newUser, currentUser);
        navigate("/wannasurf")
        }
    }

    return (
        <>
                <div className="bloc-insc-2">
                    <p className='title-sign-up-page-2'>WANNASURF</p>
                    <div className='subtitle-p2-insc'>
                        <h1 
                            className='title'>
                                Plus qu'une etape pour acceder à votre compte
                        </h1>
                    </div>
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
                            required={true}
                            name="name" 
                            type="text" 
                            placeholder='Nom'
                            id="signUpName"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        /><span className='err-msg-style'>{errorNameMsg && <p>Ton nom ne doit contenir que des lettres *</p>}</span>

                        <input 
                            required={true}
                            name="surname" 
                            type="text" 
                            placeholder='Prenom'
                            id="signUpSurname"
                            value={surname}
                            onChange={e => setSurname(e.target.value)}          
                        /><span className='err-msg-style'>{errorSurnameMsg && <p>Ton prénom ne doit contenir que des lettres *</p>}</span>
                    
                        <label>Date de naissance</label>
                        <input
                            type="date"
                            placeholder=" "
                            id="birth"
                            value={birth}
                            onChange={(e) => setBirth(e.target.value)}
                        />

                    <label>Genre</label>
                        <div className='row-gender'>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value= "Homme"
                                onChange={(e) => setGender(e.target.value)}
                                checked={gender === 'Homme'} />
                            <label
                                htmlFor="male">
                                Homme
                            </label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="Femme"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === 'Femme'} />
                        <label
                            htmlFor="female">
                            Femme
                        </label>
                        <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="Autres"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === 'Autres'} />
                        <label htmlFor="other">Autres</label>
                        </div> <span className='err-msg-style'>{errorGenderMsg && <p>Choisis ton genre *</p>}</span>  
                    
                        <PhoneInput
                            required={true}
                            name="tel" 
                            defaultCountry='FR'
                            placeholder='phoneNumber'
                            id="signUpPhoneNumber"
                            value={phoneNumber}
                            onChange={setPhoneNumber}          
                        /> <span className='err-msg-style'>{errorPhoneMsg && <p> Ton numero n'est pas valide</p>}</span>  

                        <div className='err-form'>
                            <span className='err-msg-style'>{errormsg && <p>Tous les champs doivent être rempli *</p>}</span>
                        </div>
                        <Button onClick={validate}>
                            Completer mon profil
                        </Button>

                    </form>
                </div>
            </>
        )
}