import React from "react";
import { useEffect, useState } from "react";
import "./TrajectResult.css";
import axios from "axios";
import { TrajectCard } from "../../../components/TrajectCard";
import { useOutletContext } from "react-router-dom"
import { Navbar } from "../../../components/NavBar/NavBar";
import { Footer } from "../../../components/Footer/Footer";

export const TrajectResult = () => {

    const context = useOutletContext()
    const [traject, setTraject] = context.traject;
    const [error, setError] = React.useState(null);
    const [trajectSearch,] = context.trajectSearch

    const place = trajectSearch.place_available
    const date = trajectSearch.departure_date
    
    React.useEffect(() => {
        axios
            .get(`http://localhost:5000/journeySearch?place=${place}&date=${date}`)
            .then((response) => { setTraject(response.data); })
            .catch(error => { setError(error); });
    },
    [place, date]);
    
    if (error) return `Error: ${error.message}`;
    if (!traject) return "Pas de trajets disponible :(";

    return (
        <div className="traject-result-page">
            <Navbar />
            <div>
                <h1 className="title-traject">Liste des trajets disponibles</h1>
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
            <Footer />
        </div>
        )
    }