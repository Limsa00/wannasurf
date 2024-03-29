import React, { useState, useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import axios from 'axios'
import './FuturTrajects.css'
import { TrajectCard } from '../../../components/TrajectCard'
import { Navbar } from '../../../components/NavBar/NavBar'
import { Footer } from '../../../components/Footer/Footer'
import { Error } from '../../../components/ErrorComponent/Error';
import { Loader } from '../../../components/Loader/Loader';

export const FuturTrajects = () => {

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
            const fetchUid = async () => {
            const dateNow = new Date()
        try {
            await axios
                .get(`http://localhost:5000/userUid/${uid}`)
                .then((response) => {
                    //setUser(response.data.id);
                   axios
                        .get(`http://localhost:5000/myTravels/${response.data.id}`)
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
    
    console.log(myTravel)


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
