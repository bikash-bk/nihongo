import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  children,
}) => {

  const {
    isAuthenticated,
    loading,
  } = useSelector(
    (state) => state.auth
  );

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-white text-3xl">
        Loading...
      </div>
    );
  }

  return isAuthenticated
    ? children
    : <Navigate to="/login" />;
};

export default PrivateRoute;