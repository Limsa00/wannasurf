/**
 * @file TrajectScreen.js
 * @description Page affichant les détails d'un trajet et permettant à l'utilisateur de s'inscrire.
*/
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import '../TrajectDetail/trajectScreen.css';
import { useOutletContext, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../../components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../../components/NavBar/NavBar';
import { Footer } from '../../../components/Footer/Footer';
import { Error } from '../../../components/ErrorComponent/Error';
import { Loader } from '../../../components/Loader/Loader';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import axios from 'axios';
import { baseURL } from '../../../config';

/**
 * Composant représentant la page des détails d'un trajet et permettant à l'utilisateur de s'inscrire.
 * @returns {JSX.Element} Élément JSX représentant la page des détails d'un trajet.
 */
export default function TajectScreen() {

    // Timer qui redirect sur mes futurs trajets quand l'utilisateur c'est inscrit à un trajet au bout de 2000 ms, puis clear le timer.
    function Timer () {
            console.log(Timer)
            let timerID = setTimeout(() => {
                clearTimeout(timerID)
                navigate('/mesFutursTrajets')
            }, 2000);
    }
  
    const context = useOutletContext()
    const [traject,] = context.traject  
    const { id } = useParams();
    const journeyId = parseInt(id)
  
    const navigate = useNavigate();
 
    const trajectDetails = traject.find(t => t.journey_id === journeyId)
  
    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [, setMsgSuccess] = useState("");
    const [, setMsgErr] = useState("");

    
    const {currentUser} = useContext(UserContext)
    const uid = currentUser.uid;

  // On recupere les datas du user à inscrire sur le trajet 
    React.useEffect(() => {
        axios
            .get(baseURL + `/userUid/${uid}`)
            .then((response) => { setUser(response.data); })
            .catch(error => { setError(error) });
    },
        [uid]);
    
    if (error) return (<Error />);
    if (!user) return (<Loader />);
  
  // On signUp notre user au trajet
  const signUpTraject = (evt) => {
    evt.preventDefault()
    const postTraject = {
      journey_id: trajectDetails.journey_id,
      user_id: user.id
    };

    // requete à notre serveur pour ajouter le user au trajet en tant que passager
    axios
      .post(baseURL + '/journey_has_user', postTraject)
      .then(response => {
        if (response.status === 202 || response.status === 400) {
          setMsgErr(notifyErr)
          Timer()
        } else {
          setMsgSuccess(notify)
        }
      })
  }
  
    //const de notif avec la lib react-toastity
    const notify = () => toast.success("Vous êtes inscrit à ce trajet ! ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
  
      const notifyErr = () => toast.error("Vous êtes deja inscrit à ce trajet ! ", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
  
    let btnInscription = '';
    let driverMsg = '';

    if (trajectDetails.driver_id === user.id) {
      driverMsg =
        <div className='conducteur-style'> Vous etes deja conducteur sur ce trajet</div>
    } else {
      btnInscription = <div className='center'>
            <form onSubmit={signUpTraject}>
               <Button>
                S'inscrire sur ce trajet
              </Button>
            </form>
          </div>
  }

  return (
    <div className='detail-traject-page'>
      <Navbar />
        
        <div className='title-detail'>
          <h1>Detail du trajet</h1>
        </div>

      <div className='card'>
        <div className='detail-up-card'></div>
        <div className='corps-traject'>

          <div className='left-card'>
              <p> <span className='bold'> Depart:</span> {trajectDetails.address}</p>
              <p> <span className='bold'> Heure:</span>  {trajectDetails.time}</p>
              <p> <span className='bold'>Destination:</span> {trajectDetails.surfspot}</p>
          </div>

        <div className='right-card'>
          <div className='driver line-detail'>
              <DirectionsCarIcon fontSize='large' className='position-driver-icon' />
            <p> <span className='bold margin'>Conducteur du trajet: </span>
              {trajectDetails.driver_firstname} {trajectDetails.driver_lastname}
            </p>
          </div>

            <div className='price line-detail'>
              <EuroSymbolIcon fontSize='large' className='position-driver-icon' />
              <p> <span className='bold margin'> Prix du trajet: </span>
                {trajectDetails.price} euros
              </p>
          </div> 
        </div>
        </div>
        <div className='insc-info'>
            {btnInscription}
            {driverMsg}
        </div>
      </div>
      <Footer />
    </div>
  )
}
