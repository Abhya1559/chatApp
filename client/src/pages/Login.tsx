export default function Login() {
  return (
    <div className="flex items-center justify-center bg-blue-950 min-h-screen px-4">
      <form
        action=""
        className="w-full max-w-lg h-auto border-4 bg-blue-950 shadow-2xl border-transparent bg-clip-border rounded-2xl p-10"
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Login to Chat
          </h2>
          <p className="text-gray-300 mt-2">
            Create an account to start chatting
          </p>
          <div className="space-y-6 mt-10">
            <div className="flex flex-col text-left">
              <label className="font-semibold text-white mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 border-gray-400 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 outline-none"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="font-semibold text-white mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border-2 border-gray-400 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-8 py-3 rounded-xl font-bold text-lg cursor-pointer text-white bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-500 hover:opacity-90 transition duration-300"
          >
            Login
          </button>
          <p className="text-gray-400 text-sm text-center mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-pink-400 hover:underline">
              Rgister
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
