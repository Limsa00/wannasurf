import React, { useContext, useMemo } from 'react';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import './TrajectsHistory.css';
import { Navbar } from '../../../components/NavBar/NavBar';
import { TrajectCard } from '../../../components/TrajectCard';
import { Footer } from '../../../components/Footer/Footer';
import { Loader } from '../../../components/Loader/Loader';
import { Error } from '../../../components/ErrorComponent/Error';

export const TrajectsHistory = () => {

    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [myTravel, setMyTravel] = React.useState(null);
    
    const {currentUser} = useContext(UserContext)
    console.log("route de: ", currentUser )
    const uid = currentUser.uid;

    //     React.useEffect(() => {

    //     axios
    //         .get(`http://localhost:5000/user/${uid}`)
    //         .then((response) => { setUser(response.data); })
    //         .catch(error => { setError(error); });
    // },
    //     [uid]);
   
        React.useEffect(() => {
            const dateNow = new Date()
            const fetchUid = async () => {
                try {
                    await axios
                        .get(`http://localhost:5000/user/${uid}`)
                        .then((response) => {
                            //setUser(response.data.id);
                        axios
                            .get(`http://localhost:5000/myTravels/${response.data.id}`)
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
    
    console.log(myTravel)

    return (

        <div className='history-page'>
            <Navbar />
                <div className="traject-history-bloc">
                    <h1>HISTORIQUE DES TRAJETS</h1>
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
            <Footer />
        </div>
        )
    }