import './legalNotice.css'
import { Navbar } from '../../../components/NavBar/NavBar'
import { Footer } from '../../../components/Footer/Footer'

export const LegalNotice = () => {

    return (
        <div className='legal-notice-page'>
            <Navbar />
                <div className="legal-notice-bloc">
                    <div className='Title'>
                        <h1>Conditions générales</h1>
                    </div>
                        <p className='intro'>Version applicable à compter du 1er janvier 2023.</p>
                    <div className='texte-corps'>
                        <p>
                            <span className='bold space'>
                                1.
                            </span>
                            Acceptation des conditions générales : L'utilisation de l'application de covoiturage pour les surfeurs implique l'acceptation de ces conditions générales.
                        </p>
                        
                        <p>
                            <span className='bold space'>
                                2.
                            </span>
                            Objet de l'application : L'application permet la mise en relation des conducteurs et des passagers souhaitant partager un trajet pour se rendre sur des spots de surf. L'application n'est pas responsable des trajets effectués ni des activités des utilisateurs.
                        </p>         
                        <p>
                            <span className='bold space'>
                                3.
                            </span>
                            Utilisation de l'application : L'application est réservée à un usage personnel et non-commercial. Il est interdit d'utiliser l'application à des fins autres que la mise en relation pour le covoiturage de surfeurs.
                        </p>
                        <p>
                            <span className='bold space'>
                                4.
                            </span>
                            Inscription : L'inscription à l'application est gratuite. Les utilisateurs doivent fournir des informations exactes et à jour lors de leur inscription.
                        </p>
                        <p>
                            <span className='bold space'>
                                5.
                            </span>
                            Conditions d'utilisation : Les utilisateurs doivent respecter les conditions d'utilisation de l'application, qui comprennent les règles de sécurité en matière de transport et de conduite, ainsi que les horaires convenus pour le covoiturage.
                        </p>
                        
                        <p>
                            <span className='bold space'>
                                6.
                            </span>Contribution aux frais : Les conducteurs peuvent demander une contribution aux frais de transport. Celle-ci doit être proportionnelle aux coûts réels engagés pour le trajet.
                        </p>
                        <p>
                            <span className='bold space'>
                                7.
                            </span>
                            Responsabilité : L'application ne peut être tenue responsable des dommages, pertes ou préjudices causés par les utilisateurs de l'application.
                        </p>
                        <p>
                            <span className='bold space'>
                                8.
                            </span>
                            Données personnelles : Les données personnelles des utilisateurs sont traitées conformément aux dispositions de la législation en vigueur. Les utilisateurs disposent d'un droit d'accès, de rectification et de suppression de leurs données.
                        </p>
                        <p>
                            <span className='bold space'>
                                9. 
                            </span>
                            Modification des conditions générales : L'application se réserve le droit de modifier les conditions générales à tout moment. Les utilisateurs seront informés de ces modifications par tout moyen approprié.
                        </p>
                        <p>
                            <span className='bold space'>
                                10.
                            </span>
                            Résiliation : Les utilisateurs peuvent résilier leur inscription à l'application à tout moment. L'application se réserve le droit de résilier l'inscription d'un utilisateur en cas de non-respect des conditions générales.
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
        )
    }