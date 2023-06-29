/**
 * @file Container.js
 * @description Composant conteneur qui gère l'état global des recherches de trajets.
*/
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

/**
 * Composant conteneur qui gère l'état global des recherches de trajets.
 * @returns {JSX.Element} Élément JSX représentant le conteneur.
 */
export default function Container () {
    const [trajectSearch, setTrajectSearch] = useState({})
    const [traject, setTraject] = useState(null)

    return (
        <div className="container">
            <Outlet context={{
                trajectSearch: [trajectSearch, setTrajectSearch],
                traject: [traject, setTraject]
            }} />
        </div>
    )
}