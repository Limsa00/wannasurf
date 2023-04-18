import React from 'react';
import "./backToHome.css"
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const BackToHome = () => {

  return (
      <div className='bloc-back-home'>
        <div className='back-arrow-row position-back-home'>
            <Link className='row size-text-home' to='/wannasurf/home'>      
                <HomeIcon fontSize='inherit' className='size-icon-home'/>
                <span className='size-text-home'> Retour à l'accueil</span>
            </Link>
        </div>
    </div>
  );
};

export default BackToHome;