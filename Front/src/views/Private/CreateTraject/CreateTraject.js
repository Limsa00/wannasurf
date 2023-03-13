import { useState } from "react";
import axios from "axios";
import './CreateTraject.css'
import Button from "../../../components/UI/Button";
import { Navbar } from "../../../components/NavBar/NavBar";
import { Footer } from "../../../components/Footer/Footer";

export const CreateTraject = (props) => {

    const [lieuDepart, setLieuDepart] = useState ("");
    const [lieuArrive, setLieuArrive] = useState ("");
    const [dateDepart, setDateDepart] = useState ("");
    const [heureDepart, setHeureDepart] = useState ("");
    const [nbPassager, setNbPassager] = useState ("");
    const [taillePlanche, setTaillePlanche] = useState ("");


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
            price:15,
            place_available: nbPassager,
            board_size_allowed: taillePlanche,
            number_of_boards_allowed: 3,
            meeting_address: "633-4350 Dolor Road",
            driver_id: 10
        
        };

        axios
            .post('http://localhost:5000/journey', newTraject)
    }

    return (
        <div className="create-traject-page">
            <Navbar />
                <div className="createTraject-bloc">

                    <h1>Créer votre trajet </h1>

                <form onSubmit={envoiFormulaire}>
                    <div className="form-create-trajet">
                    
                        <div className="large-screen">
                            <div className="form-champs">
                                <input 
                                placeholder="Lieu de depart"
                                type="texte" 
                                id="lieuDeDepart" 
                                name="lieuDepart" 
                                value={lieuDepart}
                                onChange={e => setLieuDepart(e.target.value)}
                                />
                            </div>

                            <div className="form-champs">
                                <input 
                                placeholder="Lieu d'arrivé "
                                type="texte" 
                                id="lieuArrive" 
                                name="lieuArrive" 
                                value={lieuArrive}
                                onChange={e => setLieuArrive(e.target.value)}
                                />
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
                        </div>

                        <div className="large-screen">
                            <div className="form-champs">
                                <input 
                                type="hours" 
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