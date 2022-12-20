import './App.css';
import './reset.css';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <div className="intro">

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

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
