import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import DashboardStudent from '../pages/DashboardStudent';
import TeacherDashboard from '../pages/TeacherDashboard';
import { RoleContext } from '../context/RoleContext';

const PrivateRoute = () => {
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
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  switch (role) {
    case 'student':
      return <DashboardStudent />;
    case 'teacher':
      return <TeacherDashboard />;
    // Add cases for other roles if needed
    default:
      return <Navigate to="/not-found" />;
  }
};

export default PrivateRoute;
