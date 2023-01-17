// import React, { useContext } from "react";
// import { Route, redirect } from "react-router-dom";
// import { AuthContext } from "./components/UserContext";

// const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
//     const {currentUser} = useContext(AuthContext)
//     return (
//         <Route
//             {...rest}
//             render={routeProps =>
//                 !!currentUser ? (
//                     <RouteComponent {...routeProps} />
//                 ) : (
//                     <redirect to={"/wannasurf/seconnecter"} />
//                 )
//             }
//         />
//     )
// }

// export default PrivateRoute