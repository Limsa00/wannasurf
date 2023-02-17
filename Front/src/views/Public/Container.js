import React, { useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Outlet, useLocation,Navigate } from "react-router-dom";

export default function Container () {

  const [trajectSearch, setTrajectSearch] = useState({}) 

    return (
        <div className="container">
            <Outlet context={[trajectSearch, setTrajectSearch]} />
        </div>
    )
}