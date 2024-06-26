import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Calender from "../components/Calender";

const DashboardStudent = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails && userDetails.name) {
      setUserName(userDetails.name);
    }
  }, []);

  return (
    <div className="flex h-screen">
       <div className="w-1/5 bg-white p-4">
       <h1 className="text-2xl font-bold mb-6">LearnEase</h1>
        <nav className="space-y-4">
          <Link to="/" className=" block text-purple-700 font-semibold">Home</Link>
          <Link to="/profile" className="block text-zinc-500">Profile</Link>
          <Link to="/courses" className="block text-zinc-500">Courses</Link>
          <Link to="/forum" className="block text-zinc-500">Quiz</Link>
        </nav>
      </div>

      <div className="flex-1 h-max bg-purple-50 p-8">
        <div className="flex justify-between items-center mb-8">
          <input type="text" placeholder="search courses" className="w-1/2 p-2 rounded-lg border border-zinc-300" />
        </div>

        <div className="bg-purple-300 p-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Sharpen your Skills with Professional Online Courses</h2>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-lg">Enroll Now</button>
        </div>

        <div className="flex space-x-4 mb-8">
          <div className="bg-white p-4 rounded-lg flex-1 text-center">
            <p className="text-zinc-500">4/8 watched</p>
            <h3 className="text-lg font-semibold">UI/UX Design</h3>
          </div>
          <div className="bg-white p-4 rounded-lg flex-1 text-center">
            <p className="text-zinc-500">15/20 watched</p>
            <h3 className="text-lg font-semibold">FrontEnd WebDev</h3>
          </div>
          <div className="bg-white p-4 rounded-lg flex-1 text-center">
            <p className="text-zinc-500">4/10 watched</p>
            <h3 className="text-lg font-semibold">Branding</h3>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Continue Watching!</h2>
        <div className="flex space-x-4">
          <div className="bg-purple-200 p-4 rounded-lg flex-1">
            <img src="../../public/front.jpg" alt="Course Thumbnail" className="rounded-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">Beginner's Guide to become a Professional Front End Developer</h3>
            <span className="bg-zinc-300 text-zinc-700 px-2 py-1 rounded-full text-sm">FrontEnd WebDev</span>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg flex-1">
            <img src="../../public/ui.jpg" alt="Course Thumbnail" className="rounded-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">Learn Optimizing User Experience with the Best UX Design Techniques</h3>
            <span className="bg-zinc-300 text-zinc-700 px-2 py-1 rounded-full text-sm">UI/UX Design</span>
          </div>
        </div>
      </div>

      <div className="bg-white w-1/5 p-6">
        <div className="mb-8">
          <img src="../../public/dp.jpg" alt="User Profile" className="rounded-full mb-4 h-20 w-20  " />
          <h2 className="text-xl font-bold">Good Evening, {userName}</h2>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Statistic</h3>
          <img src="https://placehold.co/200x100" alt="Statistics Chart" className="mb-4" />
          <p className="text-zinc-500 text-sm">Continue your learning to achieve your target. Go to Profile to Manage Tasks and Targets.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Your mentors</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img src="https://placehold.co/50x50" alt="Mentor Profile" className="rounded-full" />
              <div>
                <h4 className="font-semibold">Shourya</h4>
                <p className="text-zinc-500 text-sm">Mentor</p>
              </div>
              <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">follow</button>
            </div>
            <div className="flex items-center space-x-4">
              <img src="https://placehold.co/50x50" alt="Mentor Profile" className="rounded-full" />
              <div>
                <h4 className="font-semibold">Roshan</h4>
                <p className="text-zinc-500 text-sm">Mentor</p>
              </div>
              <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">follow</button>
            </div>
            <div className="flex items-center space-x-4">
              <img src="https://placehold.co/50x50" alt="Mentor Profile" className="rounded-full" />
              <div>
                <h4 className="font-semibold">Bharat</h4>
                <p className="text-zinc-500 text-sm">Mentor</p>
              </div>
              <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStudent;
