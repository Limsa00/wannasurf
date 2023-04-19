import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import './trajectCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from './UI/Button'
import { toast } from 'react-toastify';
import dateFormat from 'dateformat';
import axios from 'axios';
import { Error } from './ErrorComponent/Error';
import { Loader } from './Loader/Loader';
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
    const [msgSuccess, setMsgSuccess] = useState("");
    const [msgErr, setMsgErr] = useState("");
    const location = useLocation()
    
    const {currentUser} = useContext(UserContext)
    console.log("route de: ", currentUser )
    const uid = currentUser.uid;

    function refreshPage() {
        window.location.reload(false);
    }

    //     React.useEffect(() => {

    //     axios
    //         .get(`http://localhost:5000/user/${uid}`)
    //         .then((response) => { setUser(response.data); })
    //         .catch(error => { setError(error); });
    // },
    //     [uid]);
   
        React.useEffect(() => {
        const fetchUid = async () => {
        try {
            await axios
                .get(`http://localhost:5000/userUid/${uid}`)
                .then((response) => {
                    setUser(response.data.id);
                   axios
                    .get(`http://localhost:5000/myTravels/${response.data.id}`)
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
    if (!user) return (<Loader />);
    if (!myTravel) return (<Loader />);

    console.log(myTravel)

    myTravel.forEach(travel => {
        console.log(travel.journey_id)
        console.log(travel.passenger_id)
        console.log(travel.driver_id)
    });
    

    const deleteTraject = (evt) => {
        evt.preventDefault()
        console.log(journey_id)
        axios
        .delete(`http://localhost:5000/journey_has_user/${journey_id}/${passenger_id}`)
        .then(response => {
            if (response.status === 202) {
            setMsgErr(notifyErr)
            } else {
                setMsgSuccess(notify)
                refreshPage()
            }
        })
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
    if (location.pathname === '/monHistorique') {
        futurDelete =
            <div>
                <form onSubmit={deleteTraject}>
                    <Button className='delete-traject'>
                        <DeleteIcon className='delete-param'/>
                        <p>Delete mon trajet ? </p>
                    </Button>
                </form>
            </div>
    }

    if (location.pathname === '/trajectsList') {
        btnDetail =
            <Link to={`/trajectsDetails/${journey_id}`} >
                    <Button>
                            Detail du trajet
                    </Button>
                </Link>
    }

    return (
        <div className="traject-page"> 
            <div className='title-card-trajet'>
                <p><span className="bold"> Date du trajet : </span>{dateFormat(date , "dd - mm - yyyy")}</p>
            </div>
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
                     <div className="left-side">
                        <p><span className="bold"> heure de depart:</span> {time}</p>
                    </div>
                    <div className="right-side">
                        <p className="traject-price"> <span className="bold"> Prix: </span>{price} € </p>
                    </div>
                </div>
                
                
                {futurDelete}
                
                {btnDetail}
                
            </div>
        </div>
    )
  }
