/**
 * Affiche un composant TrajectCard.
 *
 * Ce composant affiche les détails d'un trajet, tels que la date, le conducteur, la ville de départ, la destination, l'heure de départ, etc. Il permet également de supprimer le trajet si l'utilisateur est le conducteur ou de voir les détails du trajet dans certains contextes.
 *
 * @module TrajectCard
*/

import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import '../TrajectCard/trajectCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '../UI/Button'
import { toast } from 'react-toastify';
import Passenger from '../../images/passenger.png'
import Driver from '../../images/driver.png'
import dateFormat from 'dateformat';
import axios from 'axios';
import { Error } from '../ErrorComponent/Error';
import { Link, useLocation } from 'react-router-dom';
import { baseURL } from '../../config/index'

/**
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.journey_id - L'identifiant du trajet.
 * @param {string} props.date - La date du trajet.
 * @param {number} props.driver_id - L'identifiant du conducteur.
 * @param {string} props.driver_firstname - Le prénom du conducteur.
 * @param {string} props.driver_lastname - Le nom de famille du conducteur.
 * @param {string} props.city - La ville de départ.
 * @param {string} props.address - L'adresse de départ.
 * @param {string} props.surfspot - Le spot de surf de destination.
 * @param {string} props.start_city - La ville de départ.
 * @param {number} props.passenger_id - L'identifiant du passager.
 * @param {string} props.time - L'heure de départ.
 * @param {number} props.price - Le prix du trajet.
 * @param {number} props.places_offered - Le nombre de places offertes.
 * @param {number} props.places_booked - Le nombre de places réservées.
 * @param {number} props.places_remaining - Le nombre de places restantes.
 *
 * @returns {JSX.Element} Retourne le composant TrajectCard affichant les détails du trajet et les actions associées.
 */
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
    passenger_id,
    time,
    price,
    places_offered,
    places_booked,
    places_remaining,
}) => {

    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [myTravel, setMyTravel] = React.useState(null);
    const [, setMsgSuccess] = useState("");
    const [, setMsgErr] = useState("");
    const location = useLocation()
    
    const {currentUser} = useContext(UserContext)
    const uid = currentUser ? currentUser.uid : null;;

    function refreshPage() {
        window.location.reload(false);
    }


        React.useEffect(() => {
            const fetchUid = async () => {
                try {
                    await axios
                        .get(baseURL + `/userUid/${uid}`)
                        .then((response) => {
                            setUser(response.data.id);
                        axios
                            .get(baseURL + `/myTravels/${response.data.id}`)
                            .then((response) => {
                                setMyTravel(response.data);
                            })
                            .catch(error => { setError(error) });
                            })
                        .catch(error => { setError(error) });
                } catch (error) {
                    console.error(error);
                }
            };
        fetchUid();
        },
            [uid]
    );

    if (error) return (<Error />);
    
    const deleteTraject = (evt) => {
        evt.preventDefault()
        if (driver_id === user) {
            axios
                .delete(baseURL + `/journey/${journey_id}`)
                .then(response => {
                    if (response.status === 202) {
                        setMsgErr(notifyErr)
                    } else {
                        setMsgSuccess(notify)
                        refreshPage()
                    }
                })
        } else {
            axios
                .delete(baseURL + `/journey_has_user/${journey_id}/${passenger_id}`)
                .then(response => {
                    if (response.status === 202) {
                        setMsgErr(notifyErr)
                    } else {
                        setMsgSuccess(notify)
                        refreshPage()
                    }
                })
        }
    }
    const notify = () => toast.success("Votre trajet a bien été supprimé ! ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
  
      const notifyErr = () => toast.error("Vous êtes deja inscrit à ce trajet ! ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })


    let futurDelete = ''
    let btnDetail = ''
    let roleJourney = ''
    let redirectUser = ''

    if (!uid) {
        redirectUser = 
            <div>
                <Link to={`/wannasurf/sinscrire`} className='redirect-user'>
                    <p>
                        Veuillez vous inscrire à Wannasurf pour plus de details !
                    </p>
                </Link>
            </div>
    }

    if (location.pathname === '/wannasurf/mesFutursTrajets') {
        futurDelete =
            <div>
                <form onSubmit={deleteTraject}>
                    <Button className='delete-traject'>
                        <DeleteIcon className='delete-param'/>
                        <p>Supprimer mon trajet </p>
                    </Button>
                </form>
            </div>
        if (passenger_id === user) {
            roleJourney =
                <div>
                    <img src={Passenger} className="icon-passenger" alt="illustration passager via flaticon" />
                </div>
        } else {
            roleJourney =
                <div>
                    <img src={Driver} className="icon-conducteur" alt="illustration conducteur via flaticon" />
                </div>
        }
    }
    
    if (location.pathname === '/wannasurf/monHistorique') {
        if (passenger_id === user) {
            roleJourney =
                <div>
                    <img src={Passenger} className="icon-passenger" alt="illustration passager via flaticon" />
                </div>
        }
        else {
            roleJourney =
                <div>
                    <img src={Driver} className="icon-conducteur" alt="illustration conducteur via flaticon" />
                </div>
        }
}

    if (location.pathname === '/wannasurf/trajectsList' && uid) {
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
                <div className='title-card-trajet'>
                    <p><span className="bold"> Date du trajet : </span>{dateFormat(date, "dd - mm - yyyy")}</p>
                    <div className='icon-card-position'>{roleJourney}</div>
                </div>
                <div className="up-card">
                    <div className="left-side">
                        <p><span className="bold">Depart: </span> {city} {start_city}</p>
                    </div>
                    <div className="right-side">
                        <p><span className="bold"> Destination : </span>{surfspot}</p>
                    </div>
                </div>
                <div className="down-card">
                     <div className="left-side">
                        <p><span className="bold"> heure de depart:</span> {time}</p>
                    </div>
                    <div className="right-side">
                        <p className="traject-price"> <span className="bold"> Prix: </span>{price} € </p>
                    </div>
                </div>    
                
                {futurDelete}
                <div className='margin-btn-detail'>
                    {btnDetail}
                    <div className='redirect-user'>{redirectUser}</div>
                </div>
            </div>
        </div>
    )
  }
