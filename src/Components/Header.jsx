import React ,{useState , useContext} from 'react'
import  gdg from '../assests/gdg.png'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
       <header className="w-full  px-8 py-2 flex justify-between items-center border-b border-gray-200">
        <div  className="">
            <img className="h-30 w-40" src={gdg} alt="GDG" />
        </div>
        <nav className="hidden sm:flex items-center space-x-8">
          <Link to="/" className="text-lg font-medium hover:text-gray-700">
            Home
          </Link>

          <Link to="/event" className="text-lg font-medium hover:text-gray-700">
            Events
          </Link>

          <Link to="/team" className="text-lg  font-medium hover:text-gray-700">
            Team
          </Link>
          <Link to="/blog" className="text-lg  font-medium hover:text-gray-700">
            Blog
          </Link>
       
        </nav>
        <button
          className="sm:hidden text-gray-700"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {isMenuOpen && (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    onClick={() => setIsMenuOpen(false)}
  >
    <motion.div
      className="w-[50vw] h-full bg-white flex flex-col items-center text-black shadow-lg"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-4 right-4 text-black"
        onClick={() => setIsMenuOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <img className="w-40 h-40 mt-8" src={gdg} alt="GDG Logo" />

      <Link
        to="/"
        className="shadow-lg py-2 px-6 w-[90%] my-2 text-center text-xl font-medium hover:bg-gray-100"
      >
        Home
      </Link>
      <Link
        to="/event"
        className="shadow-lg py-2 px-6 w-[90%] my-2 text-center text-xl font-medium hover:bg-gray-100"
      >
        Events
      </Link>
        <Link
        to="/team"
        className="shadow-lg py-2 px-6 w-[90%] my-2 text-center text-xl font-medium hover:bg-gray-100"
      >
        Team
      </Link>
      <Link
        to="/blog"
        className="shadow-lg py-2 px-6 w-[90%] my-2 text-center text-xl font-medium hover:bg-gray-100"
      >
        Blog
      </Link>
    
    </motion.div>
  </motion.div>
)}
    </div>
  )
}

export default Header
