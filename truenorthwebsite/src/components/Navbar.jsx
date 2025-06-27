import { Link } from 'react-router-dom';
import LOGO from "../assets/rectangle_red_logo.png";
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"

const Navbar = () => {
    const navigate = useNavigate();
    const navbarStyle = "rounded mr-[10px] ml-[10px] m-[5px] p-[4px] w-fit text-white hover:text-gray-300"

  const handleGoToIntro = () => {
    navigate('/'); // Navigate to homepage

    setTimeout(() => {
      const el = document.getElementById("intro");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure page renders
  };

  const handleGoToCoaches = () => {
    navigate('/'); // Navigate to homepage
    setTimeout(() => {
      const el = document.getElementById("coaches");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure page renders
  };

  const handleGoToJoinNow = () => {
    navigate('/'); // Navigate to homepage
    setTimeout(() => {
      const el = document.getElementById("joinnow");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure page renders 
}

return (

    <motion.div className = "flex justify-center m-[5px] mt-[40px] rounded w-3/4 h-fit items-center fixed z-2"
    >

        <div className = "w-1/2  m-[5px]">
        <img src={LOGO} className = "w-[170px] rounded"></img>
        </div>

        <div className = "w-fit h-fit flex justify-end m-[7px] border-red-600 border-2 rounded font-bold whitespace-nowrap backdrop-blur-md bg-black/80">
        <Link to="/" className = {navbarStyle} onClick={handleGoToIntro}>About Us </Link>
        <Link to="/" className = {navbarStyle} onClick={handleGoToCoaches}>Coaches</Link>
        <Link to="/" className = {navbarStyle} onClick={handleGoToJoinNow}>Join Now</Link>  
        <Link to="/members" className = {navbarStyle}>Members</Link>
        <Link to="/news" className = {navbarStyle}>News</Link>
        
        </div>

    </motion.div>
    
);
}

export default Navbar;
