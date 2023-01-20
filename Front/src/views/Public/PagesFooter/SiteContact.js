import './SiteContact.css'
import { useState } from 'react';
import axios from 'axios';
import Button from '../../../components/UI/Button';

export const SiteContact = () => {

    const API_KEY = "136e91e838764f66c6c3abc38e4f733806f02d2c5aa8dae5b4160a4b654b9862";

    const [nom, setNom] = useState ("");
    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState("");

     const envoiFormulaireContact = (evt) => {
        // On empeche le formulaire de recharger notre application
        evt.preventDefault()
        // on crée une constante newTraject pour l'envoyer au back avec axios par la suite
         const newContact = { 
            nom: nom,
            email: email,
            body: message,
        };

        axios
            .post(`https://api.mailslurp.com/createInbox?apiKey=${API_KEY}`, newContact)
    }
    
    return (
    
        <div className="contact-bloc">
            <div className="title-contact">
                <h1>Une question, un commentaire ? Contactez-nous !</h1>
            </div>

            <form className="form-contact" onSubmit={envoiFormulaireContact}>
                <div className="form-champs">
                    <input 
                    type="texte" 
                    placeholder='votre nom'
                    id="name" 
                    name="name" 
                    value={nom}
                    onChange={e => setNom(e.target.value)}
                    />
                </div>

                <div className="form-champs">
                    <input 
                    type="mail" 
                    placeholder='Votre email'
                    id="emailContact" 
                    name="emailContact" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-champs">
                    <input 
                    placeholder='Votre message'
                    type="textarea" 
                    id="votreCommentaire" 
                    name="votreCommentaire" 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    />
                </div>

                <Button>
                    Envoyez votre message
                </Button>


            </form>

        </div>
        )
    }