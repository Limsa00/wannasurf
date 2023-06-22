import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import './CreateTraject.css'
import Button from "../../../components/UI/Button";
import { Navbar } from "../../../components/NavBar/NavBar";
import { toast } from 'react-toastify';
import { Footer } from "../../../components/Footer/Footer";
import { Loader } from "../../../components/Loader/Loader";
import { Error } from "../../../components/ErrorComponent/Error";
import {masks} from "dateformat";

/**
 * Vue pour créer un trajet.
 * @returns {JSX.Element} La vue Create Traject.
 */
export const CreateTraject = (props) => {

    const { currentUser } = useContext(UserContext)
    const uid = currentUser.uid;
    
    const [lieuDepart, setLieuDepart] = useState ("");
    const [lieuArrive, setLieuArrive] = useState ("");
    const [dateDepart, setDateDepart] = useState ("");
    const [heureDepart, setHeureDepart] = useState("");
    const [adresseDepart, setAdresseDepart] = useState("");
    const [nbPlanche, setNbPlanche] = useState("");
    const [price, setPrice] = useState("");
    const [nbPassager, setNbPassager] = useState ("");
    const [taillePlanche, setTaillePlanche] = useState("");
    const [city, setCity] = useState ("");
    const [error, setError] = React.useState(null);
    const [surfspot, setSurfspot] = useState("");
    const [user, setUser] = useState("");
    
    const [, setMsgSuccess] = useState("");
    const [, setMsgErr] = useState("");

    const navigate = useNavigate();

    masks.heureDepart= 'HH:MM';

    /**
     * Fonction pour rediriger l'utilisateur vers la page "mesFutursTrajets" après la création du trajet.
     */
    function Timer () {
            console.log(Timer)
            let timerID = setTimeout(() => {
                clearTimeout(timerID)
                navigate('/mesFutursTrajets')
            }, 2000);
    }

    React.useEffect(() => {
        axios
            .get(`http://localhost:5000/city`)
            .then((response) => { setCity(response.data); })
            .catch(error => { setError(error); });
        axios
            .get(`http://localhost:5000/surfspot`)
            .then((response) => { setSurfspot(response.data); })
            .catch(error => { setError(error); });
        axios
            .get(`http://localhost:5000/userUid/${uid}`)
            .then((response) => { setUser(response.data); })
            .catch(error => { setError(error); });
    },
    []);
    
    if (error) return (<Error />);
    if (!city) return (<Loader />);
    if (!surfspot) return  (<Loader />);

  /**
   * Fonction pour envoyer le formulaire de création du trajet.
   * @param {Object} evt - L'événement de soumission du formulaire.
   */
    const envoiFormulaire = (evt) => {
        evt.preventDefault()
        
        const newTraject = { 
            departure_city_id: lieuDepart,
            destination_surfspot_or_city_id: lieuArrive,
            departure_date: dateDepart,
            departure_time: heureDepart,
            price: price,
            place_available: nbPassager,
            board_size_allowed: taillePlanche,
            number_of_boards_allowed: nbPlanche,
            meeting_address: adresseDepart,
            driver_id: user.id    
        };

        axios
            .post('http://localhost:5000/journey', newTraject)
            .then(response => {
                console.log(response.status)
                if (response.status === 202) {
                    setMsgErr(notifyErr)
                } else if (response.status === 400) {
                    setMsgErr(notifyErr)
                } else {
                    setMsgSuccess(notify)
                    Timer()
                }
            })
        }

    //const de notif avec la lib react-toastity
    const notify = () => toast.success("Votre trajet a bien été créé ! ", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
  
      const notifyErr = () => toast.error("Erreur lors de la creation de votre trajet, veuillez rééssayer ! ", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    

    return (
        <div className="create-traject-page">
            <Navbar />
                <div className="createTraject-bloc">

                    <h1>Créer votre trajet </h1>

                <form onSubmit={envoiFormulaire}>
                    <div className="form-create-trajet">
                    

                            <div className="large-screen">
                                <div className="form-champs">
                                    <label>
                                    <select
                                        onChange={e => setLieuDepart(e.target.value)}
                                        name="lieuDepart"
                                        id="lieuDeDepart"
                                        required={true}
                                    >
                                        <option
                                            value=''
                                        >
                                            -- Selectionnez ville depart --
                                        </option>
                                        {city?.map(city => (                                                                                                                         
                                        <option                                       
                                            key={`${city.id}`}  
                                            value= {city.id}                                       
                                        >
                                            {city.cityName}
                                        </option>
                                            ))}
                                    </select>
                                    </label>
                                </div>

                                <div className="form-champs">
                                    <label>
                                    <select
                                        onChange={e => setLieuArrive(e.target.value)}
                                        name="lieuArrive"
                                        required={true}
                                        id="lieuArrive"
                                    >
                                        <option
                                            value=''
                                        >
                                            -- Selectionnez surfspot --
                                        </option>
                                        {surfspot?.map(surfspot => (                                                                                                                         
                                        <option                                       
                                            key={`${surfspot.id}`}  
                                            value= {surfspot.id}                                       
                                        >
                                            {surfspot.surfspotName}
                                        </option>
                                            ))}
                                    </select>
                                    </label>
                                </div>
                                
                                <div className="form-champs">
                                    <label>
                                        <input 
                                        type="date"      
                                        id="dateDepart" 
                                        required={true}
                                        name="dateDepart" 
                                        value={dateDepart}
                                        onChange={e => setDateDepart(e.target.value)}
                                        /><span className='label-create-traject'>Date de depart</span>
                                    </label>
                                </div>
                            </div>  
                        
                            <div className="large-screen">
                                <div className="form-champs">
                                    <label>
                                        <input 
                                        type="number"
                                        placeholder= " "        
                                        id="price"
                                        required={true}
                                        min={0}
                                        name="price" 
                                        value={price}
                                        onChange={e => setPrice(e.target.value)}
                                        /><span className='label-create-traject'>Price</span>
                                    </label>
                                </div>

                                <div className="form-champs">
                                    <label>
                                        <input 
                                        type="number"      
                                        id="nbPlanche"
                                        required={true}
                                        placeholder=" " 
                                        min={0}
                                        max={10}
                                        name="nbPlanche" 
                                        value={nbPlanche}
                                        onChange={e => setNbPlanche(e.target.value)}
                                        /><span className='label-create-traject'>Nombre de planche autorisée</span>
                                    </label>
                                </div>
                                
                                <div className="form-champs">
                                    <label>
                                        <input 
                                        type="time" 
                                        id="heureDepart" 
                                        required={true}
                                        name="heureDepart" 
                                        value={heureDepart}
                                        onChange={e => setHeureDepart(e.target.value)}
                                        /><span className='label-create-traject'>Heure de depart</span>
                                    </label>
                                </div>
                            </div>
                        
                            <div className="large-screen">

                                <div className="form-champs">
                                    <label>
                                        <input 
                                        type="number" 
                                        id="nbPassager"
                                        required={true}
                                        min={0}
                                        max={10}
                                        placeholder= " "   
                                        name="nbPassager" 
                                        value={nbPassager}
                                        onChange={e => setNbPassager(e.target.value)}
                                        /><span className='label-create-traject'>Nombre de passager</span>
                                    </label>
                                </div>

                                <div className="form-champs">
                                    <label>
                                        <input 
                                        placeholder=" "  
                                        type="number"
                                        required={true}
                                        min={4}
                                        max={10}
                                        id="taillePlanche" 
                                        name="taillePlanche" 
                                        value={taillePlanche}
                                        onChange={e => setTaillePlanche(e.target.value)}
                                        /><span className='label-create-traject'>Taille de planche autorisée</span>
                                    </label>
                                </div>

                                <div className="form-champs">
                                    <label>
                                        <input 
                                        placeholder=" "
                                        required={true}
                                        type="texte" 
                                        id="adresseDepart" 
                                        name="adresseDepart" 
                                        value={adresseDepart}
                                        onChange={e => setAdresseDepart(e.target.value)}
                                        /><span className='label-create-traject'>Adresse de depart</span>
                                    </label>
                                </div>
                            </div>
                        
                        <Button>
                                Créer mon trajet
                        </Button>
                        </div>
                </form>
            </div>
        <Footer />
    </div>
    )
}