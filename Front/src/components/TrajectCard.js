import React from 'react'
import './trajectCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from './UI/Button'
import axios from 'axios';
import { useNavigate, Link, useLocation } from 'react-router-dom'

export const TrajectCard = ({
    journey_id,
    date,
    driver_id,
    driver_firstname,
    driver_lastname,
    city,
    address,
    surfspot,
    start_city,
    time,
    price,
    places_offered,
    places_booked,
    places_remaining,
}) => {

    let futurDelete = ''
    let btnDetail = ''
    const location = useLocation()
    if (location.pathname === '/wannasurf/monHistorique') {
        futurDelete =
            <div>
                <Button className='delete-traject'>
                    <DeleteIcon className='delete-param'/>
                    <p>Delete mon trajet ?</p>
                </Button>
            </div>
    }

    if (location.pathname === '/wannasurf/trajectsList') {
        btnDetail =
            <Link to={`/wannasurf/trajectsDetails/${journey_id}`} >
                    <Button>
                            Detail du trajet
                    </Button>
                </Link>
    }
   
    return (
        <div className="traject-page"> 
            <div className="traject-card">
                <div className="up-card">
                    <div className="left-side">
                        <p><span className="bold">Depart: </span> {city} {start_city}</p>
                    </div>
                    <div className="right-side">
                        <p><span className="bold"> Destination : </span>{surfspot}</p>
                    </div>
                </div>
                    <div className="down-card">
                        <p><span className="bold"> heure de depart:</span> {time}</p>
                        <p className="traject-price"> <span className="bold"> Prix du traject: </span>{price} $ </p>
                </div>
                
                
                {futurDelete}
                
                {btnDetail}
                
            </div>
        </div>
    )
  }
