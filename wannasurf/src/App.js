import './reset.css';
import './App.css';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="App">

      <Navbar />

      <main>
        <div className="intro">
          <p>WannaSurf est une application de covoiturage dedié à la communauté de surfer dans le monde</p>
        </div>

        <div className="shearch-bar-section">

        </div>

        <div className="bloc-info">

          <div id="info-bloc-1">


          </div>

          <div id="info-bloc-2">

            
          </div>

          <div id="info-bloc-3">

            
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
