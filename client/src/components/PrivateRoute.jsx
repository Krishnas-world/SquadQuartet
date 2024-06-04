import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import TeacherDashboard from '../pages/TeacherDashboard';
import DashboardStudent from '../pages/DashboardStudent';
import AdminDash from '../pages/AdminDash';
import { RoleContext } from '../context/RoleContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('accessToken');
  const location = useLocation();
  const { role, updateRole } = useContext(RoleContext);

  useEffect(() => {
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      updateRole(decodedToken.role);
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
    case 'admin':
      return <AdminDash />;
    default:
      return <Navigate to="/not-found" />;
  }
};

export default PrivateRoute;
