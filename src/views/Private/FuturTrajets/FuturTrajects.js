/**
 * Rend la vue pour afficher les trajets futurs.
 * Récupère et affiche les trajets prévus à l'avenir pour l'utilisateur actuel.
 */
import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import axios from 'axios'
import './FuturTrajects.css'
import { TrajectCard } from '../../../components/TrajectCard/TrajectCard'
import { Navbar } from '../../../components/NavBar/NavBar'
import { Footer } from '../../../components/Footer/Footer'
import { Error } from '../../../components/ErrorComponent/Error';
import { Loader } from '../../../components/Loader/Loader';
import { baseURL } from '../../../config';

/**
 * @returns {JSX.Element} Le composant FuturTrajects.
 */
export const FuturTrajects = () => {

    const [error, setError] = React.useState(null);
    const [myTravel, setMyTravel] = React.useState(null);
    
    const {currentUser} = useContext(UserContext)
    const uid = currentUser.uid;

        /**
         * Récupère l'ID de l'utilisateur en utilisant l'UID fourni et récupère les trajets associés à cet utilisateur.
         */
        React.useEffect(() => {
            const fetchUid = async () => {
            const dateNow = new Date()
        try {
            await axios
                .get(baseURL + `/userUid/${uid}`)
                .then((response) => {
                    //setUser(response.data.id);
                   axios
                        .get(baseURL + `/myTravels/${response.data.id}`)
                       .then((response) => {setMyTravel((response.data.filter((j => { return new Date(j.date) > dateNow; }))))
                       })
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
                <h1>MES FUTURS TRAJETS</h1>
                    <div className='flex-desktop'>
                        {myTravel?.map(traject => (           
                            <TrajectCard
                                key={`${traject.journey_id}`}
                                journey_id={traject.journey_id}
                                date={traject.date}
                                driver_id={traject.driver_id}
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
