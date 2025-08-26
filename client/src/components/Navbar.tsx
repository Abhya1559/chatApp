import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const MotionButton = motion("button");
export default function Nav() {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);
  const handleLogin = () => {
    setShowAnimation(true);
    setTimeout(() => navigate("/login"), 3000);
  };
  const handleRegister = () => {
    setShowAnimation(true);
    setTimeout(() => navigate("/register"), 3000);
  };
  return (
    <>
      <nav className="border-b border-blue-800 bg-blue-950">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
          <div className="font-black text-2xl text-white">
            <a href="/">Image</a>
          </div>
          <div>
            <ul className="flex items-center space-x-8 text-white font-medium">
              <li className="cursor-pointer hover:scale-110">Home</li>
              <li className="cursor-pointer hover:scale-110">
                <a href="/chat">Chat</a>
              </li>
              <li className="cursor-pointer hover:scale-110">
                <a href="/about">About </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between space-x-6">
            {/* <a href="/login" className="btn btn-outline btn-warning">
            Login
          </a>
          <a href="/register" className="btn btn-outline btn-error">
            Register
          </a> */}
            <MotionButton
              whileTap={{ scale: 0.9, rotate: -2 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={handleLogin}
              className="btn btn-outline btn-warning"
            >
              Login
            </MotionButton>

            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={handleRegister}
              className="btn btn-outline btn-error"
            >
              Register
            </MotionButton>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-center items-center bg-blue-950"
          >
            <motion.div
              className="w-24 h-24 rounded-full border-8 border-t-pink-500 border-r-yellow-500 border-b-orange-400 border-l-pink-500 animate-spin shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
