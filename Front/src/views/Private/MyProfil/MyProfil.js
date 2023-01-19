import './MyProfil.css'
import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContext';
import { Link } from "react-router-dom";

export const MyProfil = () => {

    const {currentUser} = useContext(UserContext)

    return (
    
        <div className="profil-bloc">

            <div className='bloc-profil-1'>
                <div className='bloc-profil-user'>
                    <div className='name-profil'>
                        <p>Marie</p>
                        <div className='img-round-profil'>

                        </div>
                    </div>
                </div>
            </div>

            <div className='bloc-profil-2'>
                <div className='bloc-mail-user'>
                    <div className='mail-user'>
                        <p>Email</p>
                        <div className='bloc-value-mail'>
                            <p>{currentUser.email}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bloc-profil-3'>
                <div className='bloc-birth-user'>
                    <div className='birth-user'>
                        <p>Date de naissance</p>
                        <div className='bloc-value-birth'>
                            <p>11/12/2022</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bloc-profil-4'>
                <div className='bloc-mdp-user'>
                    <div className='mdp-user'>
                        <p>Mot de passe</p>
                        <div className='bloc-value-mdp'>
                            <button>AFFICHER</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bloc-profil-5'>
                <div className='bloc-modif-picture-user'>
                    <div className='picture-user'>
                        <p>Modifier ma photo</p>
                        <div className='bloc-value-image'>

                        </div>
                    </div>
                </div>
            </div>

            <div className='bloc-profil-6'>
                <div className='bloc-delete-acc'>
                    <p>supprimer mon compte</p>
                </div>
            </div>

            <Link to="/wannasurf/home">
                        <button type="submit" className="btn-home">Retour à l'acceuil</button>
            </Link>
        </div>

        )
    }