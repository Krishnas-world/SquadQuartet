import { Navigate, useLocation } from "react-router-dom";
import DashboardStudent from "../pages/DashboardStudent";
import TeacherDashboard from "../pages/TeacherDashboard";
// import ParentDashboard from "../pages/ParentDashboard";
// import AdminDashboard from "../pages/AdminDashboard";
import { useContext, useEffect } from "react";
import { RoleContext } from "../context/RoleContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('accessToken');
  const location = useLocation();
  const { role, updateRole } = useContext(RoleContext);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        updateRole(decodedToken.role);
      } catch (error) {
        console.error('Invalid token', error);
        localStorage.removeItem('accessToken');
        return <Navigate to="/login" replace state={{ from: location }} />;
      }
    }
  }, [token, updateRole]);

  if (!token) {
    return <Navigate to="/register" replace state={{ from: location }} />;
  }

  switch (role) {
    case 'student':
      return <DashboardStudent />;
    case 'teacher':
      return <TeacherDashboard />;
    // case 'parent':
    //   return <ParentDashboard />;
    // case 'admin':
    //   return <AdminDashboard />;
    default:
      return <Navigate to="/not-found" />;
  }
};

export default PrivateRoute;
