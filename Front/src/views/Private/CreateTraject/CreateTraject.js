import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import './CreateTraject.css'
import Button from "../../../components/UI/Button";
import { Navbar } from "../../../components/NavBar/NavBar";
import { toast } from 'react-toastify';
import { Footer } from "../../../components/Footer/Footer";
import { Loader } from "../../../components/Loader/Loader";
import { Error } from "../../../components/ErrorComponent/Error";

export const CreateTraject = (props) => {

    const [lieuDepart, setLieuDepart] = useState ("");
    const [lieuArrive, setLieuArrive] = useState ("");
    const [dateDepart, setDateDepart] = useState ("");
    const [heureDepart, setHeureDepart] = useState("");
    const [adresseDepart, setAdresseDepart] = useState("");
    const [nbPlanche, setNbPlanche] = useState("");
    const [price, setPrice] = useState ("");
    const [nbPassager, setNbPassager] = useState ("");
    const [taillePlanche, setTaillePlanche] = useState("");
    const [city, setCity] = useState ("");
    const [error, setError] = React.useState(null);
    const [surfspot, setSurfspot] = useState("");
    
    const [msgSuccess, setMsgSuccess] = useState("");
    const [msgErr, setMsgErr] = useState("");

    const navigate = useNavigate();
    

    function Timer () {
        useEffect(() => {
            let timerID = setTimeout(() => {
                navigate('/wannasurf/home')
            }, 2000);
            return () => clearTimeout(timerID)
        })
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
    },
    []);
    
    if (error) return (<Error />);
    if (!city) return (<Loader />);
    if (!surfspot) return  (<Loader />);

    // Lorsquon va envoyer notre form
    // Le but du jeu est de créer un objet indentique à ceux presents dans la base de données
    // Pour ce faire, on va creer une fonction envoiFormulaire
    const envoiFormulaire = (evt) => {
        // On empeche le formulaire de recharger notre application
        evt.preventDefault()
        // on crée une constante newTraject pour l'envoyer au back avec axios par la suite
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
            driver_id: 10
        
        };

        axios
            .post('http://localhost:5000/journey', newTraject)
            .then(response => {
                if (response.status === 202) {
                    setMsgErr(notifyErr)
                } else {
                    setMsgSuccess(notify)
                    .then(Timer())
                }
            })
        }

    console.log(lieuDepart)

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
                                <select
                                    onChange={e => setLieuDepart(e.target.value)}
                                    name="lieuDepart"
                                    id="lieuDeDepart"
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
                            </div>

                            <div className="form-champs">
                                <select
                                    onChange={e => setLieuArrive(e.target.value)}
                                    name="lieuArrive"
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
                            </div>
                            
                            <div className="form-champs">
                                <input 
                                type="date"
                                placeholder="Date de depart"        
                                id="dateDepart" 
                                name="dateDepart" 
                                value={dateDepart}
                                onChange={e => setDateDepart(e.target.value)}
                                />
                            </div>

                            <div className="form-champs">
                                <input 
                                type="number"
                                placeholder="Price"        
                                id="price" 
                                name="price" 
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                />
                            </div>

                            <div className="form-champs">
                                <input 
                                type="number"
                                placeholder="Nombre de planche autorisée"        
                                id="nbPlanche" 
                                name="nbPlanche" 
                                value={nbPlanche}
                                onChange={e => setNbPlanche(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="large-screen">
                            <div className="form-champs">
                                <input 
                                type="time" 
                                placeholder="Heure de depart"
                                id="heureDepart" 
                                name="heureDepart" 
                                value={heureDepart}
                                onChange={e => setHeureDepart(e.target.value)}
                                />
                            </div>

                            <div className="form-champs">
                                <input 
                                type="number" 
                                placeholder="Nombre de passagers"
                                id="nbPassager" 
                                name="nbPassager" 
                                value={nbPassager}
                                onChange={e => setNbPassager(e.target.value)}
                                />
                            </div>

                            <div className="form-champs">
                                <input 
                                placeholder="Taille de planche autorisée"
                                type="texte" 
                                id="taillePlanche" 
                                name="taillePlanche" 
                                value={taillePlanche}
                                onChange={e => setTaillePlanche(e.target.value)}
                                />
                            </div>

                            <div className="form-champs">
                                <input 
                                placeholder="Adresse de depart"
                                type="texte" 
                                id="adresseDepart" 
                                name="adresseDepart" 
                                value={adresseDepart}
                                onChange={e => setAdresseDepart(e.target.value)}
                                />
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