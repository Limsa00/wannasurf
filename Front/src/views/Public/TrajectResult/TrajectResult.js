import React from "react";
import { useEffect, useState } from "react";
import "./TrajectResult.css";
import axios from "axios";


export const TrajectResult = () => {

    const [traject, setTraject] = React.useState(null);
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
        axios
            .get("http://localhost:5000/journey/2")
            .then((response) => { setTraject(response.data); })
            .catch(error => { setError(error); });
    },
    []);
    
    if (error) return `Error: ${error.message}`;
    if (!traject) return "Pas de trajets disponible :(";

    return (
        <div className="traject-page">
            <h1 className="title-traject">Liste des trajets disponibles</h1>
            <div className="traject-card">
                <div className="up-card">
                    <div className="left-side">
                        <p><span className="bold">Depart: </span> {traject.departure_city_id}</p>
                    </div>
                    <div className="right-side">
                        <p><span className="bold"> Destination : </span>{traject.destination_surfspot_or_city}</p>
                    </div>
                </div>
                    <div className="down-card">
                        <p><span className="bold"> heure de depart:</span> {traject.departure_time}</p>
                        <p className="traject-price"> <span className="bold"> Prix du traject: </span>{traject.price} $ </p>
                    </div>
            </div>
        </div>
        )
    }