import React from 'react'
import './trajectCard.css'
import Button from './UI/Button'
import { useNavigate, Link } from 'react-router-dom'

export const TrajectCard = ({
    journey_id,
    date,
    driver_id,
    driver_firstname,
    driver_lastname,
    city,
    address,
    surfspot,
    time,
    price,
    places_offered,
    places_booked,
    places_remaining,
}) => {

    return (
        <div className="traject-page"> 
            <h1 className="title-traject">Liste des trajets disponibles</h1>
            <div className="traject-card">
                <div className="up-card">
                    <div className="left-side">
                        <p><span className="bold">Depart: </span> {city}</p>
                    </div>
                    <div className="right-side">
                        <p><span className="bold"> Destination : </span>{surfspot}</p>
                    </div>
                </div>
                    <div className="down-card">
                        <p><span className="bold"> heure de depart:</span> {time}</p>
                        <p className="traject-price"> <span className="bold"> Prix du traject: </span>{price} $ </p>
                </div>
                <Link to={`/wannasurf/trajectsDetails/${journey_id}`} >
                    <Button>
                            Detail du trajet
                    </Button>
                </Link>
            </div>
        </div>
    )
  }
