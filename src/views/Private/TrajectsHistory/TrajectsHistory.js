/**
 * Rend la vue pour afficher l'historique des trajets de l'utilisateur.
 * Affiche les trajets passés de l'utilisateur connecté.
 */
import React, { useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import './TrajectsHistory.css';
import { Navbar } from '../../../components/NavBar/NavBar';
import { TrajectCard } from '../../../components/TrajectCard/TrajectCard';
import { Footer } from '../../../components/Footer/Footer';
import { Loader } from '../../../components/Loader/Loader';
import { Error } from '../../../components/ErrorComponent/Error';
import { baseURL } from '../../../config';

/**
 * @returns {JSX.Element} Le composant TrajectsHistory.
 */
export const TrajectsHistory = () => {
    const [error, setError] = React.useState(null);
    const [myTravel, setMyTravel] = React.useState(null);
    
    const {currentUser} = useContext(UserContext)
    const uid = currentUser.uid;
    
    /**
     * Récupère les trajets passés de l'utilisateur en utilisant l'UID fourni.
     */
        React.useEffect(() => {
            const dateNow = new Date()
            const fetchUid = async () => {
                try {
                    await axios
                        .get(baseURL + `/userUid/${uid}`)
                        .then((response) => {
                            axios
                                .get(baseURL + `/myTravels/${response.data.id}`)
                                .then((response) => {setMyTravel((response.data.filter((j => { return new Date(j.date) < dateNow; }))))})
                                .catch(error => { setError(error) });
                        })
                        .catch(error => { setError(error) });
                    } catch (error) {
                        console.error(error);
                }
            };
        fetchUid();
    }, [uid]);
 
    if (error) return (<Error />);
    if (!myTravel) return (<Loader />);

    return (

        <div className='history-page'>
            <Navbar />
                <div className="traject-history-bloc">
                    <h1>HISTORIQUE DES TRAJETS</h1>
                    <div className='flex-desktop'>
                    {myTravel?.map(traject => (           
                        <TrajectCard
                            key={`${traject.journey_id}`}
                            journey_id={traject.journey_id}
                            date={traject.date}
                            driver_firstname={traject.driver_firstname}
                            driver_lastname={traject.driver_lastname}
                            city={traject.city}
                            address={traject.address}
                            surfspot={traject.surfspot}
                            time={traject.time}
                            price={traject.price}
                            start_city={traject.start_city}
                            passenger_id={traject.passenger_id}
                            places_remaining={traject.places_remaining}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
        )
    }