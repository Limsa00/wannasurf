import React, { useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Outlet, useLocation,Navigate } from "react-router-dom";

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