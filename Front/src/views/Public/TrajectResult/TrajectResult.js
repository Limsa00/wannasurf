import React from "react";
import { useEffect, useState } from "react";
import "./TrajectResult.css";
import axios from "axios";
import { TrajectCard } from "../../../components/TrajectCard";
import { useOutletContext } from "react-router-dom"
import dateFormat, { masks } from "dateformat";

export const TrajectResult = () => {

    const [traject, setTraject] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [trajectSearch, setTrajectSearch] = useOutletContext() 

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
        <div>
            {traject?.map(traject =>(
                <TrajectCard
                    key={traject.toString()}
                    journey_id={traject.id}
                    date={traject.date}
                    driver_firstname={traject.driver_firstname}
                    driver_lastname={traject.driver_lastname}
                    city={traject.city}
                    address={traject.address}
                    surfspot={traject.surfsport}
                    time={traject.time}
                    price={traject.price}
                    places_remaining={traject.places_remaining}
                />
            ))}
        </div>
        )
    }