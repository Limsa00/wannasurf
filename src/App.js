/**
 * @file app.js
 * @description Point d'entrée principal de l'application.
 */
import './reset.css';
import { Home } from './views/Public/Home/Home'
import { TrajectResult } from './views/Public/TrajectResult/TrajectResult';
import { SiteContact } from './views/Public/PagesFooter/SiteContact';
import { LegalNotice } from './views/Public/PagesFooter/legalNotice';
import { CreateTraject } from './views/Private/CreateTraject/CreateTraject';
import { MonEspace } from './views/Private/MonEspace/MonEspace';
import { DeleteAccount } from './views/ConnectionPages/DeleteAccount';
import { MyProfil } from './views/Private/MyProfil/MyProfil';
import { FuturTrajects } from './views/Private/FuturTrajets/FuturTrajects';
import { TrajectsHistory } from './views/Private/TrajectsHistory/TrajectsHistory';
import { SignInModal } from './views/ConnectionPages/SignInModal';
import { SignUpModal } from './views/ConnectionPages/SignUpModal';
import { SignUpInfo } from './views/ConnectionPages/SignUpPage2';
import { ResetPassword } from './views/ConnectionPages/ResetPassword';
import { ChangePassword } from './views/ConnectionPages/ChangePassword';
import Container from './views/Public/Container';
import TrajectScreen from './views/Public/TrajectDetail/TrajectScreen';
import {
  Routes,
  Route
} from "react-router-dom";
import Private from './views/Private/Private';

/**
 * Composant racine de l'application.
 * 
 * @returns {JSX.Element} L'élément racine de l'application.
 */
export const App = () => {
  return (
      <div className="app">

      {/* Systeme de routage front de notre app, toutes les routes sont contenues dans la balise <Routes> */}
          <Routes>
          
          {/* Route container permettant un transit de données entre Home, TrajectResult et TrajectScreen */}
            <Route path="/" element={<Container />}>
              <Route 
                index 
                element={<Home />} 
              />
              <Route 
                exact path="trajectsList" 
                element= { <TrajectResult /> } 
              />
              <Route 
                exact path="trajectsDetails/:id" 
                element= { <TrajectScreen /> } 
              />
            </Route>
  
          
            <Route 
              exact path="/seconnecter" 
              element= { <SignInModal />} 
            />
        
            <Route 
              exact path="/resetPassword" 
              element= { <ResetPassword />} 
            />  
                
            <Route 
              path="/deleteAccount" 
              element= { <DeleteAccount />} 
            />
        
            <Route 
              path="/changePassword" 
              element= { <ChangePassword />} 
            />

            <Route 
              path="/sinscrire" 
              element={<SignUpModal />}
            />

            <Route 
                path="/sinscrire/complements" 
                element= { <SignUpInfo /> } 
              />

            <Route 
              path="/siteContact" 
              element= { <SiteContact /> } 
            />

            <Route 
              path="/createTraject" 
              element= { <CreateTraject /> } 
            />

            <Route 
              path="/legalNotice" 
              element= { <LegalNotice /> } 
            />

            <Route path="/private" element={<Private />}>
              <Route 
                path="monEspace" 
                element= { <MonEspace /> } 
              />
            </Route>

            <Route 
              path="/monProfil" 
              element= { <MyProfil /> } 
            />

            <Route 
              path="/mesFutursTrajets" 
              element= { <FuturTrajects /> } 
            />

            <Route 
              path="/monHistorique" 
              element= { <TrajectsHistory /> } 
            />
          
          </Routes>

      </div> 

  );
}

export default App;
