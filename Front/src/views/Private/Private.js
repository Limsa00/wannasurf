import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Outlet, useLocation,Navigate } from "react-router-dom";

export default function Private () {

    const {currentUser} = useContext(UserContext)
        console.log("currentUser from Private.js // route de: ", currentUser );

        if(!currentUser) {
            return <Navigate to="/wannasurf/home" />
        }

    return (
        <div className="container">
            <Outlet />

        </div>
    )
}