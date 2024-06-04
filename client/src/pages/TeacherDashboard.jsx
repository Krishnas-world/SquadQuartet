import React from 'react'

function TeacherDashboard() {
  return (
    <div className="flex h-screen bg-purple-100 dark:bg-zinc-900">

      <div className="w-1/5 bg-white dark:bg-zinc-800 p-4">
        <h1 className="text-2xl font-bold mb-6">LearnEase</h1>
        <nav className="space-y-4">
          <a href="#" className="block text-purple-600 dark:text-white font-semibold">Dashboard</a>
          <a href="#" className="block text-zinc-600 dark:text-zinc-400">Students</a>
          <a href="#" className="block text-zinc-600 dark:text-zinc-400">Live className</a>
          <a href="#" className="block text-zinc-600 dark:text-zinc-400">Chat room</a>
          <a href="#" className="block text-zinc-600 dark:text-zinc-400">Settings</a>
        </nav>
      </div>

      <div className="flex-1 p-6 space-y-6">

        <div className="flex justify-between items-center">
          <div className="bg-purple-500 text-white p-6 rounded-lg w-3/5">
            <h2 className="text-3xl font-bold">Welcome back, Ms Sara!</h2>
            <p>Your Students completed 80% of the tasks. The Progress is Excellent!</p>
            <div className="mt-4">
              <input type="text" placeholder="Search" className="p-2 rounded-lg w-full" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="https://placehold.co/50x50" alt="Sara Khan" className="rounded-full w-12 h-12" />
            <span>Sara Khan</span>
          </div>
        </div>

        <div className="flex space-x-6">

          <div className="w-1/3 space-y-6">

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg">
              <img src="https://placehold.co/150x150" alt="Mentor Profile" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Sara Khan</h3>
              <p className="text-yellow-500">★★★★★</p>
              <ul className="mt-4 space-y-2">
                <li>No. of classes: <strong>800+</strong></li>
                <li>No. of students: <strong>500+</strong></li>
                <li>Student feedback: <strong>positive</strong></li>
                <li>Course: <strong>UI/UX Design, Branding, Graphic Design</strong></li>
              </ul>
            </div>


            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg text-center">
              <img src="https://placehold.co/200x100" alt="Courses" className="mb-4" />
              <button className="bg-purple-500 text-white p-2 rounded-lg">View all courses</button>
            </div>
          </div>


          <div className="w-2/3 space-y-6">

            <div className="bg-purple-200 dark:bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Student Progress</h3>
              <img src="https://placehold.co/300x150" alt="Progress Chart" className="mt-4" />
            </div>


            <div className="flex space-x-6">

              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg w-1/2">
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


              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg w-1/2">
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
      </div>
    </div>
  )
}

export default TeacherDashboard
