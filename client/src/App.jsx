import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDash from './pages/AdminDash';
import Assessment from './pages/Assessment';
import CourseContent from './pages/CourseContent';
import CourseDetail from './pages/CourseDetail';
import Courses from './pages/Courses';
import TeacherDashboard from './pages/TeacherDashboard';
import Forum from './pages/Forum';
import Home from './pages/Home';
import Library from './pages/Library';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import VideoSession from './pages/VideoSession';
import PrivateRoute from './components/PrivateRoute';
import About from './pages/About';
// import DashboardStudent from './pages/DashboardStudent';
import RoleProvider from './context/RoleContext';
import Widget from './pages/Widget';

function App() {
  return (
    <RoleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Widget/>} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<PrivateRoute />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/video-session" element={<VideoSession />} />
            <Route path="/assessment/:id" element={<Assessment />} />
            <Route path="/library" element={<Library />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/course/:id/content" element={<CourseContent />} />
            <Route path="/forum" element={<Forum />} />
          </Route>
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  );
}

export default App;
