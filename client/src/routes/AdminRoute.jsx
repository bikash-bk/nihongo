import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const AdminRoute = ({
  children,
}) => {

  const {
    user,
    loading,
  } = useSelector(
    (state) => state.auth
  );

  // WAIT FOR AUTH CHECK
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-white text-3xl">
        Loading...
      </div>
    );
  }

  // ADMIN ACCESS
  return user?.role === "admin"
    ? children
    : <Navigate to="/login" />;
};

export default AdminRoute;