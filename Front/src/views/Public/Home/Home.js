import './Home.css';
import GroupIcon from '@mui/icons-material/Group';
import SurfingIcon from '@mui/icons-material/Surfing';
import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from 'react';
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
                                    <input
                                        type="text"
                                        placeholder="Lieu de depart"
                                        className="input-search-style" 
                                        value={lieuDepart}
                                        onChange={(e) => setLieuDepart(e.target.value)} />
                                    <input
                                        type="text"
                                        placeholder="Lieu de destination"
                                        className="input-search-style" 
                                        value={lieuDestination}
                                        onChange={(e) => setLieuDestination(e.target.value)} />
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

                                    <Button>
                                        Trouver un trajet
                                    </Button>
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