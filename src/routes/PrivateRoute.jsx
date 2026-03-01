import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  } else {
    return (
      <Navigate to="/auth/login" state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
