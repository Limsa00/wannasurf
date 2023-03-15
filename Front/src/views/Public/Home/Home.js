import './Home.css';
import GroupIcon from '@mui/icons-material/Group';
import SurfingIcon from '@mui/icons-material/Surfing';
import { useOutletContext, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import ImageCarrou1 from "../../../images/surf-carrou-ex1.jpg";
import ImageCarrou2 from "../../../images/surf-carrou-ex2.jpg";
import ImageCarrou3 from "../../../images/surf-carrou-ex3.jpg";
import Button from '../../../components/UI/Button';
import { Navbar } from '../../../components/NavBar/NavBar';
import { Footer } from '../../../components/Footer/Footer';

export const Home = () => {
    
    const navigate = useNavigate();
    const [lieuDepart, setLieuDepart] = useState("");
    const [lieuDestination, setLieuDestination] = useState("");
    const [dateDepart, setDateDepart] = useState("");
    const [nombrePersonne, setNombrePersonne] = useState(1);
    const [trajectSearch, setTrajectSearch] = useOutletContext().trajectSearch 
    const [city, setCity] = useState ("");
    const [error, setError] = React.useState(null);
    const [surfspot, setSurfspot] = useState ("");

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
    
    if (error) return `Error: ${error.message}`;
    if (!city) return "Pas de villes disponible :(";
    if (!surfspot) return "Pas de villes disponible :(";

    const envoiFormulaire = (evt) => {
        evt.preventDefault()

        setTrajectSearch ( {
            departure_city: lieuDepart,
            destination_surfspot_or_city: lieuDestination,
            departure_date: dateDepart,
            place_available: nombrePersonne,
        });
        console.log(trajectSearch)
        navigate("/wannasurf/trajectsList")
    }

        return (
            <div className='home-page'>
                <Navbar />
                    <div className="home-bloc">
                        
                        <div className="intro">
                            <p>WannaSurf est une application de covoiturage dedié à la communauté de surfer dans le monde.
                                <span>
                                    <SurfingIcon fontSize='small' htmlColor='blue' />
                                </span>
                            </p>
                        </div>

                        <div className="shearch-bar-section">
                            <form className="search-form" onSubmit={envoiFormulaire}>
                            <div className="flex-mobile">
                                <div className="form-champs-home">
                                    <select
                                        onChange={e => setLieuDepart(e.target.value)}
                                        name="lieuDepart"
                                        id="lieuDeDepart"
                                    >
                                        <option
                                            value=''
                                        >
                                            -- Ville depart --
                                        </option>
                                        {city?.map(city => (                                                                                                                         
                                        <option                                       
                                            key={`${city.id}`}  
                                            value= {city.cityName}                                       
                                        >
                                            {city.cityName}
                                        </option>
                                            ))}
                                    </select>
                                    </div>

                                    <div className="form-champs-home">
                                    <select
                                        onChange={e => setLieuDestination(e.target.value)}
                                        name="lieuArrive"
                                        id="lieuArrive"
                                    >
                                        <option
                                            value=''
                                        >
                                            -- Surfspot --
                                        </option>
                                        {surfspot?.map(surfspot => (                                                                                                                         
                                        <option                                       
                                            key={`${surfspot.id}`}  
                                            value= {surfspot.surfspotName}                                       
                                        >
                                            {surfspot.surfspotName}
                                        </option>
                                            ))}
                                    </select>                         
                                    </div>
                                </div>
                            
                                <div className="flex-mobile">
                                    <input
                                        type="date"
                                        placeholder="Date de depart"
                                        className="input-search-style"
                                        value={dateDepart}
                                        onChange={(e) => setDateDepart(e.target.value)} />
                                    <GroupIcon fontSize='small' />
                                    <input
                                        type="range"
                                        min="1"
                                        max="8"
                                        value={nombrePersonne}
                                        onChange={(e) => setNombrePersonne(e.target.value)}
                                        className="input-search-style" />
                                    <output>{nombrePersonne}</output>
                                
                                </div>
                                
                                <div className='bottom-magin'>
                                    <Button>
                                        Trouver un trajet
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className="bloc-info-title">
                            <h2>WannaSurf, ton ami du quotidien !</h2>
                        </div>
                            <div className="bloc-info">
                                <div id="bloc-info-1">
                                    <h3>Faites des economies pour surfer un max</h3>
                                    <img src={ImageCarrou1} className="img-size" alt="illustration du bloc, faire des economies avec wannaSurf" />
                                </div>
                                <div id="bloc-info-2">
                                    <h3>Pratiquez votre passion tout en respectant l'environnement</h3>
                                    <img src={ImageCarrou2} className="img-size" alt="illustration du bloc, respectez l'environnement avec wannaSurf" />
                                </div>
                                <div id="bloc-info-3">
                                    <h3>Faites vous de nouveaux partenaires de glisse</h3>
                                    <img src={ImageCarrou3} className="img-size close-footer" alt="illustration du bloc, un max de fun avec wannaSurf" />
                                </div>
                            </div>

                    </div>
                <Footer />    
            </div>
        )

    }