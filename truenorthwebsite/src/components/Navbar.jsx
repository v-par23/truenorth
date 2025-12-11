import { Link } from 'react-router-dom';
import LOGO from "../assets/rectangle_red_logo.png";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navbarStyle = "rounded mr-[10px] ml-[10px] m-[5px] p-[4px] w-fit text-white hover:text-gray-300";

  const handleGoToIntro = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById("intro");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsOpen(false);
  };

  const handleGoToCoaches = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById("coaches");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsOpen(false);
  };

  const handleGoToJoinNow = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById("joinnow");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsOpen(false);
  };

  const handleGoToHome = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById("home");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      } 
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  return (
    <motion.div className="flex justify-center m-[5px] mt-[40px] rounded w-3/4 h-fit items-center fixed z-20">
      
      {/* Logo stays left always */}
      <div className="w-1/2">
        <button onClick={handleGoToHome} className="cursor-pointer hover:opacity-80 transition-opacity">
          <img src={LOGO} className="w-[170px] rounded" alt="logo" />
        </button>
      </div>

      {/* Navbar links on medium+, hamburger on small */}
      <div className="w-fit h-fit flex justify-end m-[7px] font-bold whitespace-nowrap">
        
        {/* Regular nav for md+ */}
        <div className="hidden md:flex border-red-600 border-2 rounded backdrop-blur-md bg-black/35">
          <Link to="/" className={navbarStyle} onClick={handleGoToIntro}>About Us</Link>
          <Link to="/" className={navbarStyle} onClick={handleGoToCoaches}>Coaches</Link>
          <Link to="/" className={navbarStyle} onClick={handleGoToJoinNow}>Join Now</Link>
          <Link to="/members" className={navbarStyle}>Members</Link>
          <Link to="/news" className={navbarStyle}>News</Link>
        </div>

        {/* Hamburger on small */}
        <div className="md:hidden flex flex-col justify-center items-center ml-4 border-red-600 border-2 rounded w-[35px] h-[35px] backdrop-blur-md bg-black/35" onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-6 h-0.5 bg-white mb-1 transition-transform ${isOpen ? 'rotate-45 translate-y-1.5 ' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
      </div>  

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full right-11 mt-2 border-red-600 border-2 rounded backdrop-blur-md bg-black/35 p-4 flex flex-col items-end z-30 w-30">
          <div className = "flex justify-center flex-col align-center font-bold">
          <Link to="/" className=" w-fit text-white hover:text-gray-300" onClick={handleGoToIntro}>About Us</Link>
          <Link to="/" className=" w-fit text-white hover:text-gray-300" onClick={handleGoToCoaches}>Coaches</Link>
          <Link to="/" className=" w-fit text-white hover:text-gray-300" onClick={handleGoToJoinNow}>Join Now</Link>
          <Link to="/members" className=" w-fit text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Members</Link>
          <Link to="/news" className=" w-fit text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>News</Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
