import './TrajectsHistory.css';
import { Navbar } from '../../../components/NavBar/NavBar';
import { Footer } from '../../../components/Footer/Footer';

export const TrajectsHistory = () => {

    return (

        <div className='history-page'>
            <Navbar />
                <div className="traject-history-bloc">
                    <h1>HISTORIQUE DES TRAJETS</h1>

                </div>
            <Footer />
        </div>
        )
    }