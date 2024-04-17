import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from ".././contexts/authContext";

function PrivateRoute({ element, ...rest }) {
  const { userLoggedIn } = useAuth();

  if (userLoggedIn) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
