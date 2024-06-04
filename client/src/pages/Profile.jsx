export default function Profile() {
  return (
      <div className="bg-purple-200 min-h-screen p-4">
        <div className="bg-purple-600 text-white rounded-lg p-6 space-y-6">
          <div className="flex justify-between items-center">
            <button className="text-white text-2xl">&larr;</button>
            <h1 className="text-xl font-semibold">LearnEase</h1>
            <div className="flex space-x-4 items-center">
              <button className="bg-purple-800 p-2 rounded-lg">Share</button>
              <img src="https://placehold.co/40" alt="User" className="rounded-full w-10 h-10"/>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <img src="https://placehold.co/100" alt="Profile" className="rounded-full w-24 h-24"/>
              <button className="mt-2 text-purple-300">Edit Profile</button>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-semibold">Gauthami</h2>
              <p className="text-purple-300">student at LearnEase</p>
              <div className="bg-purple-500 rounded-lg p-4 space-y-4">
                <h3 className="text-xl font-semibold">TO-DO LIST</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="bg-purple-300 w-3 h-3 rounded-full"></span>
                    <span>finish ui/ux course</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="bg-purple-300 w-3 h-3 rounded-full"></span>
                    <span>submit FM assignment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="bg-purple-300 w-3 h-3 rounded-full"></span>
                    <span>mini project</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="bg-purple-300 w-3 h-3 rounded-full"></span>
                    <span>set today's goals</span>
                  </li>
                </ul>
                <button className="text-purple-300">+ Add to-do items</button>
                <button className="text-purple-300">delete list</button>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Set today's target!</h4>
                  <select className="bg-purple-700 text-white rounded-lg p-2 mt-2">
                    <option>choose study duration</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="bg-purple-500 rounded-lg p-4">
                <h3 className="text-xl font-semibold">courses</h3>
                <ul className="space-y-2">
                  <li>. UI/UX design</li>
                  <li>. DSA in java</li>
                  <li>. Branding</li>
                  <li>. Finance Management</li>
                </ul>
              </div>
              <div className="bg-purple-500 rounded-lg p-4">
                <h3 className="text-xl font-semibold">projects</h3>
                <ul className="space-y-2">
                  <li>. Flappy bird game</li>
                  <li>. Spotify ui clone</li>
                  <li>. Online shopping app ui</li>
                </ul>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="bg-purple-500 rounded-lg p-4">
                <h3 className="text-xl font-semibold">Your Progress</h3>
                <img src="https://placehold.co/200x100" alt="Progress Chart"/>
              </div>
              <div className="bg-purple-500 rounded-lg p-4">
                <p className="text-lg">Gauthami, your progress is excellent! Stay consistent!</p>
                <img src="https://placehold.co/100x100" alt="Motivational Image" className="mt-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}