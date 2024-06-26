import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TeacherDashboard() {
  const [name, setUserName] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showStudents, setShowStudents] = useState(false);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails && userDetails.name) {
      setUserName(userDetails.name);
    }
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://squadquartet.onrender.com/students');
      setStudents(response.data);
      setShowStudents(true);
    } catch (error) {
      console.error('Failed to fetch students:', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex h-max bg-purple-100">
      <div className="w-1/5 bg-white p-4">
        <h1 className="text-2xl font-bold mb-6">LearnEase</h1>
        <nav className="space-y-4">
          <Link to="#" className="block text-zinc-600 dark:text-white font-semibold">Dashboard</Link>
          <button onClick={fetchStudents} className="block text-zinc-600 dark:text-zinc-400">Students</button>
          <Link to="#" className="block text-zinc-600 dark:text-zinc-400">Live Class</Link>
          <Link to="/chat" className="block text-zinc-600 dark:text-zinc-400">Chat room</Link>
          <Link to="#" className="block text-zinc-600 dark:text-zinc-400">Settings</Link>
        </nav>
      </div>

      <div className="flex-1 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="bg-purple-500 text-white p-6 rounded-lg w-3/5">
            <h2 className="text-3xl font-bold">Welcome back, {name}</h2>
            <p>Your Students completed 80% of the tasks. The Progress is Excellent!</p>
            <div className="mt-4">
              <input type="text" placeholder="Search" className="p-2 rounded-lg w-full" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="https://placehold.co/50x50" alt="Sara Khan" className="rounded-full w-12 h-12" />
            <span>{name}</span>
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <img src="https://placehold.co/150x150" alt="Mentor Profile" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-yellow-500">★★★★★</p>
              <ul className="mt-4 space-y-2">
                <li>No. of classes: <strong>800+</strong></li>
                <li>No. of students: <strong>500+</strong></li>
                <li>Student feedback: <strong>positive</strong></li>
                <li>Course: <strong>UI/UX Design, Branding, Graphic Design</strong></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <img src="https://placehold.co/200x100" alt="Courses" className="mb-4" />
              <button className="bg-purple-500 text-white p-2 rounded-lg">View all courses</button>
            </div>
          </div>

          <div className="w-2/3 space-y-6">
            <div className="bg-white  p-6 rounded-lg">
              <h3 className="text-xl font-bold">Student Progress</h3>
              <img src="https://placehold.co/300x150" alt="Progress Chart" className="mt-4" />
            </div>
            <div className="flex space-x-6">
              <div className="bg-white p-6 rounded-lg w-1/2">
                <h3 className="text-xl font-bold">June 2024</h3>
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <span>June 8, 2024</span>
                    <span>UI/UX Live className</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span>Upload Assignment</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg w-1/2">
                <h3 className="text-xl font-bold">Add and Manage Assessments</h3>
                <div className="mt-4 space-y-4">
                  <button className="bg-purple-500 text-white p-2 rounded-lg w-full">Upload Assignments</button>
                  <button className="bg-purple-500 text-white p-2 rounded-lg w-full">Upload Quizzes</button>
                  <button className="bg-purple-500 text-white p-2 rounded-lg w-full">Upload Courses</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add the student list here */}
        {showStudents && (
          <div className="bg-white p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold mb-4">Student List</h3>
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="loader">Loading...</div>
              </div>
            ) : (
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">Name</th>
                    <th className="py-2 px-4 border-b border-gray-200">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student._id}>
                      <td className="py-2 px-4 border-b border-gray-200">{student.name}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{student.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TeacherDashboard;
