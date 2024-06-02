import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDash from './pages/AdminDash';
import Assessment from './pages/Assessment';
import CourseContent from './pages/CourseContent';
import CourseDetail from './pages/CourseDetail';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Forum from './pages/Forum';
import Home from './pages/Home';
import Library from './pages/Library';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import VideoSession from './pages/VideoSession';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/course/:id/content" element={<CourseContent />} />
        <Route path="/video-session" element={<VideoSession />} />
        <Route path="/assessment/:id" element={<Assessment />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
