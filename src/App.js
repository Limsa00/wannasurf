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
            <Route path="/wannasurf" element={<Container />}>
              <Route 
                path="/wannasurf" 
                element={<Home />} 
              />
              <Route 
                exact path="/wannasurf/trajectsList" 
                element= { <TrajectResult /> } 
              />
              <Route 
                exact path="/wannasurf/trajectsDetails/:id" 
                element= { <TrajectScreen /> } 
              />
            </Route>
  
          
            <Route 
              exact path="/wannasurf/seconnecter" 
              element= { <SignInModal />} 
            />
        
            <Route 
              exact path="/wannasurf/resetPassword" 
              element= { <ResetPassword />} 
            />  
                
            <Route 
              path="/wannasurf/deleteAccount" 
              element= { <DeleteAccount />} 
            />
        
            <Route 
              path="/wannasurf/changePassword" 
              element= { <ChangePassword />} 
            />

            <Route 
              path="/wannasurf/sinscrire" 
              element={<SignUpModal />}
            />

            <Route 
                path="/wannasurf/sinscrire/complements" 
                element= { <SignUpInfo /> } 
              />

            <Route 
              path="/wannasurf/siteContact" 
              element= { <SiteContact /> } 
            />

            <Route 
              path="/wannasurf/createTraject" 
              element= { <CreateTraject /> } 
            />

            <Route 
              path="/wannasurf/legalNotice" 
              element= { <LegalNotice /> } 
            />

            <Route path="/wannasurf/private" element={<Private />}>
              <Route 
                path="/wannasurf/monEspace" 
                element= { <MonEspace /> } 
              />
            </Route>

            <Route 
              path="/wannasurf/monProfil" 
              element= { <MyProfil /> } 
            />

            <Route 
              path="/wannasurf/mesFutursTrajets" 
              element= { <FuturTrajects /> } 
            />

            <Route 
              path="/wannasurf/monHistorique" 
              element= { <TrajectsHistory /> } 
            />
          
          </Routes>

      </div> 

  );
}

export default App;
