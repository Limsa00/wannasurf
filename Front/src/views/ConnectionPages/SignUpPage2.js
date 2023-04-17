import './Sign.css'
import React, {useContext, useRef, useState} from "react";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
const callApiModule = require('../../components/callApiModule');

export const SignUpInfo = () => {

    registerLocale("fr", fr);

    const navigate = useNavigate();

    const {currentUser} = useContext(UserContext)
    console.log("currentUser from SignUpPage2.js // route de : ", currentUser );
    
    const uid = currentUser.uid;
    console.log("uid from SignUpPage2.js : ", uid);

    const [errormsg, Seterrormsg] = useState("");

    const [name, setName] = useState ("");
    const [surname, setSurname] = useState ("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState ("");
    const [city, setCity] = useState ("");
    const [birth, setBirth] = useState ("");

    const handleForm = (evt) => {
        evt.preventDefault()

        if (name === "" || surname === "" || gender === "" || birth === "" || phoneNumber === "" || city === "") {
            Seterrormsg("All fields are mandatory");
        } else if (!name.match(/^[a-zA-Z]*$/)) {
            Seterrormsg("Name is not alphanumeric");
        } else if (gender !== "Homme" && gender !== "Femme" && gender !== "Autres") {
            Seterrormsg("Please identify as male, female or others");
        } else if (!phoneNumber.match(/^[0-9]*$/)) {
            Seterrormsg("Phone Number must contain only numbers");
        };

        const newUser = { 
            lastname: surname,
            firstname: name,
            gender: gender,
            phone: phoneNumber,
            birthday: birth,
            city_id: 1,
            uid: uid
        };
        console.log("newUser : ", newUser);

        const endpoint = `http://localhost:5000/user`;

        callApiModule(endpoint, "POST", newUser, currentUser);
        navigate("/wannasurf/home");

        /*
        axios
            .post('http://localhost:5000/user', newUser)
            .then(
                navigate("/wannasurf/home")
                )   
        */
    }

    return (
        <>
                <div className="inscription-bloc">
                    <p className='title-sign-up-page-2'>WANNASURF</p>
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
                    
                        <label>Date de naissance</label>
                        <div className='center row'>
                        <DatePicker
                        
                            required
                            selected={birth}
                            onChange={(date) => setBirth(date)}
                            locale="fr"
                            isClearable
                            dateFormat="P"
                        />
                        </div>

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
                        </div>
                    
                        <PhoneInput
                            required
                            name="tel" 
                            defaultCountry='FR'
                            placeholder='phoneNumber'
                            id="signUpPhoneNumber"
                            value={phoneNumber}
                            onChange={setPhoneNumber}          
                        />   

                        <Button>
                            Completer mon profil
                        </Button>

                    </form>
                </div>
            </>
        )
    }