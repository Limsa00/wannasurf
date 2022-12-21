import './reset.css';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './views/Home'
import { TrajectResult } from './views/trajectResult';
import { SiteContact } from './views/siteContact';
import { LegalNotice } from './views/legalNotice'
import {
  Routes,
  Route
} from "react-router-dom";

export const App = () => {
  return (
      <div className="app">

          <Navbar />

        <Routes>
          <Route exact path="/wannasurf" element= { <Home />} />
        </Routes>

        <Routes>
          <Route exact path="/trajectsList" element= { <TrajectResult /> } />
        </Routes>

        <Routes>
          <Route exact path="/siteContact" element= { <SiteContact /> } />
        </Routes>

        <Routes>
          <Route exact path="/legalNotice" element= { <LegalNotice /> } />
        </Routes>

        <Footer />
      </div> 

  );
}

export default App;
