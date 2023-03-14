import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import './TrajectsHistory.css';
import { Navbar } from '../../../components/NavBar/NavBar';
import { Footer } from '../../../components/Footer/Footer';

export const TrajectsHistory = () => {

    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);
    
    const {currentUser} = useContext(UserContext)
    console.log("route de: ", currentUser )
    const uid = currentUser.uid;

        React.useEffect(() => {

        axios
            .get(`http://localhost:5000/user/${uid}`)
            .then((response) => { setUser(response.data); })
            .catch(error => { setError(error); });
    },
        [uid]);
    
    if (error) return `Error: ${error.message}`;
    if (!user) return "Pas de user connecté :(";

    return (

        <div className='history-page'>
            <Navbar />
                <div className="traject-history-bloc">
                    <h1>HISTORIQUE DES TRAJETS</h1>
                    <p>{ user.firstname}</p>
                </div>
            <Footer />
        </div>
        )
    }