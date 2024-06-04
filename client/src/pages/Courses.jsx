import { Link } from "react-router-dom"

export default function Widget() {
  
  return (
      <div className="bg-purple-100 min-h-screen p-4">
        <div className="flex justify-between items-center mb-4">
        <Link to='/'><button className="text-purple-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button></Link>
          <h1 className="text-2xl font-bold text-purple-700">LearnEase</h1>
          <div className="flex items-center space-x-2">
            <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Share</button>
            <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full"/>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-purple-700">Watch and Learn Now!!</h2>
          <div className="mt-2">
            <select className="w-full p-2 border border-zinc-300 rounded-md">
              <option>choose category...</option>
            </select>
          </div>
          <a href="#" className="text-purple-700 mt-2 inline-block">View WatchList</a>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-700">UI/UX Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://placehold.co/200x120" alt="UI/UX Design" className="rounded-md mb-4"/>
                <h4 className="text-lg font-semibold">What is UI/UX? how to get started with UI/UX Design? | Shourya</h4>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Watch Now</button>
                  <button className="bg-purple-200 text-purple-700 px-4 py-2 rounded-lg">Add to WatchList</button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://placehold.co/200x120" alt="UI Design Principles" className="rounded-md mb-4"/>
                <h4 className="text-lg font-semibold">UI Design Principles. Everything you need to know about UI | Shourya</h4>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Watch Now</button>
                  <button className="bg-purple-200 text-purple-700 px-4 py-2 rounded-lg">Add to WatchList</button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://placehold.co/200x120" alt="60-30-10 Color Rule" className="rounded-md mb-4"/>
                <h4 className="text-lg font-semibold">How to properly use the 60-30-10 Color Rule in Designing Interface | Bharat</h4>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Watch Now</button>
                  <button className="bg-purple-200 text-purple-700 px-4 py-2 rounded-lg">Add to WatchList</button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://placehold.co/200x120" alt="Coffee shop user interface" className="rounded-md mb-4"/>
                <h4 className="text-lg font-semibold">Design a simple Coffee shop user interface only in 10 min | Bharat</h4>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Watch Now</button>
                  <button className="bg-purple-200 text-purple-700 px-4 py-2 rounded-lg">Add to WatchList</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-700">Front End Web Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://placehold.co/200x120" alt="Front End Development" className="rounded-md mb-4"/>
                <h4 className="text-lg font-semibold">Introduction to the Holy Trinity of Front End Web Development : HTML , CSS, JS | Roshan</h4>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Watch Now</button>
                  <button className="bg-purple-200 text-purple-700 px-4 py-2 rounded-lg">Add to WatchList</button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://placehold.co/200x120" alt="HTML & CSS" className="rounded-md mb-4"/>
                <h4 className="text-lg font-semibold">All about HTML & CSS in 1 hour | Roshan</h4>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Watch Now</button>
                  <button className="bg-purple-200 text-purple-700 px-4 py-2 rounded-lg">Add to WatchList</button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://placehold.co/200x120" alt="Learn JavaScript" className="rounded-md mb-4"/>
                <h4 className="text-lg font-semibold">Learn JavaScript in one hour | Roshan</h4>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Watch Now</button>
                  <button className="bg-purple-200 text-purple-700 px-4 py-2 rounded-lg">Add to WatchList</button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://placehold.co/200x120" alt="Calculator using HTML, CSS, JavaScript" className="rounded-md mb-4"/>
                <h4 className="text-lg font-semibold">How to make a calculator using html,css, javascript| Roshan</h4>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Watch Now</button>
                  <button className="bg-purple-200 text-purple-700 px-4 py-2 rounded-lg">Add to WatchList</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}