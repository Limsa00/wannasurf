/**
 * @file SiteContact.js
 * @description Page de contact de l'application WannaSurf.
*/
import './SiteContact.css'
import EmailIcon from '@mui/icons-material/Email';
import HouseIcon from '@mui/icons-material/House';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'; 
import { Navbar } from '../../../components/NavBar/NavBar'
import { Footer } from '../../../components/Footer/Footer'

/**
 * Composant représentant la page de contact.
 * @returns {JSX.Element} Élément JSX représentant la page de contact.
 */
export const SiteContact = () => {  
    return (
        <div className='site-contact-page'>
            <Navbar />
                <div className="contact-bloc">
                    <div className="title-contact">
                        <h1>Une question, un commentaire ? Contactez-nous !</h1>
                    </div>

                    <div className="Contact-bloc">
                        <div className="intro-contact">
                            <p>Nous sommes ravis de pouvoir vous aider avec toutes vos questions ou préoccupations concernant notre application de covoiturage de surfeurs. N'hésitez pas à nous contacter via l'un des canaux suivants :</p>
                        </div>

                        <div className="contact">
                            <div className='contact-line'>
                                <EmailIcon /> <p className='space'><span className='bold'>E-mail :</span>support@nomdevotreapplication.com</p>
                            </div>
                            <div className='contact-line'>
                                <PhoneIphoneIcon /> <p className='space'><span className='bold'>Téléphone :</span>+33 1 23 45 67 89</p>
                            </div>
                            <div className='contact-line'>
                                <HouseIcon /><p className='space'><span className='bold'>Adresse : </span>123 Rue des Surfeurs, 75001 Paris, France</p>
                            </div>
                        </div>

                        <div className="contact-end">
                            <p>Nous sommes disponibles du lundi au vendredi de 9h à 18h pour répondre à vos questions. Nous ferons de notre mieux pour vous répondre dans les meilleurs délais. Merci de votre intérêt pour notre application !</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
        )
    }