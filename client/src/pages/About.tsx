import Nav from "../components/Navbar";
import fImage from "../assets/Image.jpg";
export default function About() {
  return (
    <>
      <Nav />
      <div className="bg-gradient-to-b from-indigo-100 via-white to-indigo-50 flex flex-col items-center py-12 px-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
            About This Chat App
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hi, I’m <span className="font-bold text-indigo-600">Abhyanand</span>
            . I’m building a modern, real-time chat application where
            conversations feel natural, fluid, and fun. This is more than just
            messaging — it’s about staying connected.
          </p>
        </div>

        {/* Profile Card */}
        <div className="mt-12 bg-white shadow-xl rounded-2xl p-8 max-w-2xl text-center">
          <img
            src={fImage}
            alt="Abhyanand"
            className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 shadow-md"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            Abhyanand
          </h2>
          <p className="text-gray-500">Creator of this Chat App</p>
          <p className="text-gray-600 mt-4">
            I love building apps that bring people together. With this chat
            project, I’m experimenting with UI/UX, real-time features, and
            creative design. Every chat bubble, every interaction is carefully
            crafted to make your experience delightful.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-16 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              💬 Real-time Messaging
            </h3>
            <p className="text-gray-600">
              Chat instantly with smooth, fast, and reliable message delivery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              🎨 Clean UI
            </h3>
            <p className="text-gray-600">
              A sleek, modern design inspired by apps you already love.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              🔐 Secure
            </h3>
            <p className="text-gray-600">
              Your conversations are private — built with safety in mind.
            </p>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-20 text-center max-w-2xl">
          <p className="text-xl italic text-gray-700">
            “Conversations create connections. My mission is to make those
            connections effortless.”
          </p>
          <p className="mt-4 text-gray-500">— Abhyanand</p>
        </div>
      </div>
    </>
  );
}
