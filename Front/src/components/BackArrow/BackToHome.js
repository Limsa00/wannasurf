/**
 * Affiche un composant BackToHome.
 *
 * Ce composant affiche un lien permettant à l'utilisateur de retourner à la page d'accueil lorsqu'il est cliqué.
 * @module BackToHome
 */

import React from 'react';
import "./backToHome.css"
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

/**
 * Composant BackToHome.
 * @returns {HTMLElement} Élément HTML représentant le composant BackToHome.
 */
const BackToHome = () => {

  
  return (
      <div className='bloc-back-home'>
        <div className='back-arrow-row position-back-home'>
            <Link className='row size-text-home' to='/'>      
                <HomeIcon fontSize='inherit' className='size-icon-home'/>
                <span className='size-text-home'> Retour à l'accueil</span>
            </Link>
        </div>
    </div>
  );
};

export default BackToHome;