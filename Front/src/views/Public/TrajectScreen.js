import React from 'react'
import '../../views/Public/trajectScreen.css'
import { useOutletContext, useParams } from 'react-router-dom'
import Button from '../../../src/components/UI/Button'
import { Navbar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import axios from 'axios'

export default function TajectScreen() {

    const context = useOutletContext()
    const [traject,] = context.traject
  
    const { id } = useParams();
    const journeyId = parseInt(id)
  
    const trajectDetails = traject.find(t => t.journey_id === journeyId)
    console.log(id)
    console.log(trajectDetails)
    console.log(trajectDetails.journey_id)
  
      const signUpTraject = (evt) => {
        evt.preventDefault()
        const postTraject = { 
          journey_id: trajectDetails.journey_id,
          user_id: 3
        };

        axios
            .post('http://localhost:5000/journey_has_user', postTraject)
    }
  
  return (
    <div className='detail-traject-page'>
      <Navbar />
        
        <div className='title-detail'>
          <h1>Detail du trajet</h1>
        </div>

        <div className='corps-traject'>

          <div className='intro-traject'>
            <div className='departure'>
                <p>{trajectDetails.time}</p>
                <p>{trajectDetails.address}</p>
            </div>

            <div className='surfspot'>
              <p>{trajectDetails.surfspot}</p>
            </div>
          </div>

          <div className='price'>
            <p>Prix du trajet</p>
            <span className='margin'>{trajectDetails.price}</span>
          </div>

          <div className='driver'>
          <p> Trajet proposé par
            <span className='bold margin'>
            {trajectDetails.driver_firstname} {trajectDetails.driver_lastname}
          </span></p>
        </div>

          <div className='center'>
            <form onSubmit={signUpTraject}>
              <Button>
                S'inscrire sur ce trajet
              </Button>
            </form>
          </div>
        </div>
      <Footer />
    </div>
  )
}
