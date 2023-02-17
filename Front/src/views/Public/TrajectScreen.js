import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function TajectScreen() {

    const context = useOutletContext()
    const [traject,] = context.traject
  
    const { id } = useParams();
    const journeyId = parseInt(id)
  
    const trajectDetails = traject.find(t => t.journey_id === journeyId)
    console.log(id)
    console.log(trajectDetails)
  
  return (
      <div>
        <h1>Detail du trajet</h1>
        <p>{trajectDetails.price}</p>
    </div>
  )
}
