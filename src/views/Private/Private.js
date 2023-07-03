/**
 * Rend la page privée qui vérifie si un utilisateur est connecté.
 * Si aucun utilisateur n'est connecté, redirige vers la page d'accueil.
 *
 * @returns {JSX.Element} Le composant Private.
*/
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Outlet,Navigate } from "react-router-dom";

/**
 * Composant qui affiche la page privée.
 *
 * @returns {JSX.Element} Le composant Private.
 */
export default function Private () {
    const {currentUser} = useContext(UserContext)

      // Vérifie si l'utilisateur est connecté, sinon redirige vers la page d'accueil
        if(!currentUser) {
            return <Navigate to="/wannasurf" />
        }

    return (
        <div className="container">
            <Outlet />

        </div>
    )
}