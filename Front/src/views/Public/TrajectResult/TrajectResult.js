import React from "react";
import { useState } from "react";
import "./TrajectResult.css";
import axios from "axios";
import { TrajectCard } from "../../../components/TrajectCard";
import { useOutletContext } from "react-router-dom"
import { Navbar } from "../../../components/NavBar/NavBar";
import { Footer } from "../../../components/Footer/Footer";
import { Loader } from "../../../components/Loader/Loader";
import { Error } from "../../../components/ErrorComponent/Error";

export const TrajectResult = () => {

    // permet d'utiliser les datas de l'outlet save dans la page home de la recherche
    const context = useOutletContext()
    const [trajectSearch,] = context.trajectSearch
    const [traject, setTraject] = context.traject;

    const [error, setError] = React.useState(null);

    // On recup date et place de notre Container.js
    const place = trajectSearch.place_available
    const date = trajectSearch.departure_date
    
    // On fetch les resultat de notre recherche par date et place.
    React.useEffect(() => {
        axios
            .get(`http://localhost:5000/journeySearch?place=${place}&date=${date}`)
            .then((response) => { setTraject(response.data); })
            .catch(error => { setError(error); });
    },
        [place, date]);
        
    if (error) return (<Error />);
    if (!traject) return (<Loader />);

    return (
        <div className="traject-result-page">
            <Navbar />
            <div>
                <h2 className="title-traject">Liste des trajets disponibles pour votre recherche</h2>
                    <div className='flex-desktop'>
                    {traject?.map(traject => (           
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
                            places_remaining={traject.places_remaining}
                        />
                    ))}
                    </div>
                </div>
            <Footer />
        </div>
        )
    }