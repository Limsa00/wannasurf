import './reset.css';
import { Navbar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Home } from './views/Public/Home/Home'
import { TrajectResult } from './views/Public/TrajectResult/TrajectResult';
import { SiteContact } from './views/Public/PagesFooter/SiteContact';
import { LegalNotice } from './views/Public/PagesFooter/legalNotice';
import { CreateTraject } from './views/Private/CreateTraject/CreateTraject';
import { MonEspace } from './views/Private/MonEspace/MonEspace';
import { MyProfil } from './views/Private/MyProfil/MyProfil';
import { FuturTrajects } from './views/Private/FuturTrajets/FuturTrajects';
import { TrajectsHistory } from './views/Public/TrajectsHistory/TrajectsHistory';
import { SignInModal } from './views/ConnectionPages/SignInModal';
import { SignUpModal } from './views/ConnectionPages/SignUpModal';
import { SignUpInfo } from './views/ConnectionPages/SignUpPage2';
import { ResetPassword } from './views/ConnectionPages/ResetPassword';
import { ChangePassword } from './views/ConnectionPages/ChangePassword';
import Container from './views/Public/Container';
import TrajectScreen from './views/Public/TrajectScreen';
import {
  Routes,
  Route
} from "react-router-dom";
import Private from './views/Private/Private';

export const App = () => {

  return (
      <div className="app">

          <Navbar />
      
          <Routes>
          
            <Route path="/wannasurf" element={<Container />}>
              <Route 
                exact path="/wannasurf/home" 
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
              exact path="/wannasurf/changePassword" 
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
              exact path="/wannasurf/siteContact" 
              element= { <SiteContact /> } 
            />

            <Route 
              exact path="/wannasurf/createTraject" 
              element= { <CreateTraject /> } 
            />

            <Route 
              exact path="/wannasurf/legalNotice" 
              element= { <LegalNotice /> } 
            />

            <Route path="/wannasurf/private" element={<Private />}>
              <Route 
                path="/wannasurf/private/monEspace" 
                element= { <MonEspace /> } 
              />
            </Route>

            <Route 
              exact path="/wannasurf/monProfil" 
              element= { <MyProfil /> } 
            />

            <Route 
              exact path="/wannasurf/mesFutursTrajets" 
              element= { <FuturTrajects /> } 
            />

            <Route 
              exact path="/wannasurf/monHistorique" 
              element= { <TrajectsHistory /> } 
            />
          
          </Routes>

          <Footer />

      </div> 

  );
}

export default App;
