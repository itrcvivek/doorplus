// // ProtectedRoute.js
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Navigate, Route } from "react-router-dom";
// import { loadUser } from "./action/UserAuthActions";
// const ProtectedRoute = ({ element, isAdmin, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }
//   if (isAdmin === true && user?.user?.role !== "admin" ) {
//     return <Navigate to="/login" />;
//   }
//   return <Route {...rest} element={element} />;
// };

// export default ProtectedRoute;
// ProtectedRoute.js
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element:Component, isAdmin, ...rest }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAdmin === true && user?.user?.role !== "admin") {
    return <Navigate to="/login" />;
  }
// debugger
  return <Component {...rest}  />;
};

export default ProtectedRoute;


