import './reset.css';
import { Navbar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Home } from './views/Home/Home'
import { TrajectResult } from './views/TrajectResult/TrajectResult';
import { SiteContact } from './views/PagesFooter/SiteContact';
import { LegalNotice } from './views/PagesFooter/legalNotice';
import { CreateTraject } from './views/CreateTraject/CreateTraject';
import { MonEspace } from './views/MonEspace/MonEspace';
import { MyProfil } from './views/MyProfil/MyProfil';
import { FuturTrajects } from './views/FuturTrajets/FuturTrajects';
import { TrajectsHistory } from './views/TrajectsHistory/TrajectsHistory';
import { SignIn } from './views/ConnectionPages/SignIn';
import { SignUp } from './views/ConnectionPages/SignUp';
import {
  Routes,
  Route
} from "react-router-dom";

export const App = () => {
  return (
      <div className="app">

        <Navbar />

      <Routes>
        
        <Route exact path="/wannasurf/home" element={<Home />} />
        
          <Route exact path="/wannasurf/seconnecter" element= { <SignIn />} />

          <Route exact path="/wannasurf/sinscrire" element= { <SignUp /> } />

          <Route exact path="/wannasurf/trajectsList" element= { <TrajectResult /> } />

          <Route exact path="/wannasurf/siteContact" element= { <SiteContact /> } />

          <Route exact path="/wannasurf/createTraject" element= { <CreateTraject /> } />

          <Route exact path="/wannasurf/legalNotice" element= { <LegalNotice /> } />

          <Route exact path="/wannasurf/monEspace" element= { <MonEspace /> } />

          <Route exact path="/wannasurf/monProfil" element= { <MyProfil /> } />

          <Route exact path="/wannasurf/mesFutursTrajets" element= { <FuturTrajects /> } />

          <Route exact path="/wannasurf/monHistorique" element= { <TrajectsHistory /> } />
        </Routes>


        <Footer />
      </div> 

  );
}

export default App;
