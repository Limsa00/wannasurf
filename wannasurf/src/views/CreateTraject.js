import { useState } from "react";
import './CreateTraject.css'

export const CreateTraject = (props) => {

    const [lieuDepart, setLieuDepart] = useState ("");
    const [lieuArrive, setLieuArrive] = useState ("");
    const [dateDepart, setDateDepart] = useState ("");
    const [heureDepart, setHeureDepart] = useState ("");
    const [heureArrive, setHeureArrive] = useState ("");
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
            lieuDepart: lieuDepart,
            lieuArrive: lieuArrive,
            dateDepart: dateDepart,
            heureDepart: heureDepart,
            heureArrive: heureArrive,
            nbPassager: nbPassager,
            taillePlanche: taillePlanche
        };
    }

    return (
    
        <div className="createTraject-bloc">

            <h1>Créer votre trajet </h1>

        <form onSubmit={envoiFormulaire}>
            <div className="form">
            
                <div className="form-champs">
                    <label htmlFor="lieuDepart"> Lieu de depart </label>
                    <input 
                    type="texte" 
                    id="lieuDeDepart" 
                    name="lieuDepart" 
                    value={lieuDepart}
                    onChange={e => setLieuDepart(e.target.value)}
                    />
                </div>

                <div className="form-champs">
                    <label htmlFor="lieuArrive"> Lieu d'arrivé </label>
                    <input 
                    type="texte" 
                    id="lieuArrive" 
                    name="lieuArrive" 
                    value={lieuArrive}
                    onChange={e => setLieuArrive(e.target.value)}
                    />
                </div>

                <div className="form-champs">
                    <label htmlFor="dateDepart"> Date de depart </label>
                    <input 
                    type="date" 
                    id="dateDepart" 
                    name="dateDepart" 
                    value={dateDepart}
                    onChange={e => setDateDepart(e.target.value)}
                    />
                </div>

                <div className="form-champs">
                    <label htmlFor="heureDepart"> Heure de depart </label>
                    <input 
                    type="hours" 
                    id="heureDepart" 
                    name="heureDepart" 
                    value={heureDepart}
                    onChange={e => setHeureDepart(e.target.value)}
                    />
                </div>

                <div className="form-champs">
                    <label htmlFor="heureArrivee"> Heure d'arrivée </label>
                    <input 
                    type="hours" 
                    id="heureArrive" 
                    name="heureArrive" 
                    value={heureArrive}
                    onChange={e => setHeureArrive(e.target.value)}
                    />
                </div>

                <div className="form-champs">
                    <label htmlFor="nbpassager"> Nombre de passagers </label>
                    <input 
                    type="number" 
                    id="nbPassager" 
                    name="nbPassager" 
                    value={nbPassager}
                    onChange={e => setNbPassager(e.target.value)}
                    />
                </div>

                <div className="form-champs">
                    <label htmlFor="taillePlanche"> Taille de planche autorisée</label>
                    <input 
                    type="texte" 
                    id="taillePlanche" 
                    name="taillePlanche" 
                    value={taillePlanche}
                    onChange={e => setTaillePlanche(e.target.value)}
                    />
                </div>

            </div>
                <button type="submit" className="btn">
                    Créer mon trajet
                </button>
        </form>
        </div>
        )
    }