export default function Widget() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}>
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-center space-x-4 mb-6">
              <button className="bg-zinc-200 text-zinc-800 py-2 px-4 rounded">Student</button>
              <button className="bg-zinc-200 text-zinc-800 py-2 px-4 rounded">Teacher</button>
              <button className="bg-purple-300 text-zinc-800 py-2 px-4 rounded">Admin</button>
            </div>
            <h2 className="text-2xl font-bold text-center text-purple-800 mb-2">Create an account</h2>
            <p className="text-center text-zinc-600 mb-6">Enter your email to sign up for this website</p>
            <input type="email" placeholder="email@domain.com" className="w-full p-3 mb-4 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"/>
            <button className="w-full bg-purple-800 text-white py-3 rounded mb-4">Sign up with email</button>
            <div className="flex items-center justify-center mb-4">
              <hr className="w-1/4 border-zinc-300"/>
              <span className="mx-2 text-zinc-600">or continue with</span>
              <hr className="w-1/4 border-zinc-300"/>
            </div>
            <button className="w-full bg-white border border-zinc-300 text-zinc-800 py-3 rounded flex items-center justify-center">
              <img src="https://placehold.co/20x20" alt="Google" className="mr-2"/>
              Google
            </button>
            <p className="text-center text-zinc-600 text-sm mt-6">By clicking continue, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
    )
}
