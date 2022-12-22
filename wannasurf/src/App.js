import './reset.css';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './views/Home'
import { TrajectResult } from './views/trajectResult';
import { SiteContact } from './views/siteContact';
import { LegalNotice } from './views/legalNotice';
import { CreateTraject } from './views/CreateTraject';
import { MonEspace } from './views/MonEspace';
import {
  Routes,
  Route
} from "react-router-dom";

export const App = () => {
  return (
      <div className="app">

        <Navbar />

        <Routes>
          <Route exact path="/wannasurf/home" element= { <Home />} />
        </Routes>

        <Routes>
          <Route exact path="/wannasurf/trajectsList" element= { <TrajectResult /> } />
        </Routes>

        <Routes>
          <Route exact path="/wannasurf/siteContact" element= { <SiteContact /> } />
        </Routes>

        <Routes>
          <Route exact path="/wannasurf/createTraject" element= { <CreateTraject /> } />
        </Routes>

        <Routes>
          <Route exact path="/wannasurf/legalNotice" element= { <LegalNotice /> } />
        </Routes>

        <Routes>
          <Route exact path="/wannasurf/monEspace" element= { <MonEspace /> } />
        </Routes>


        <Footer />
      </div> 

  );
}

export default App;
