import { Link } from 'react-router-dom';
import LOGO from "../assets/rectangle_red_logo.png";

const Navbar = () => {
const navbarStyle = "rounded mr-[10px] ml-[10px] m-[5px] p-[4px] w-fit text-white hover:text-gray-300"
return (

    <div className = "flex justify-center m-[5px] mt-[40px] rounded w-3/4 h-fit items-center fixed ">

        <div className = "w-1/2  m-[5px]">
        <img src={LOGO} className = "w-[170px] rounded"></img>
        </div>

        <div className = "w-fit h-fit flex justify-end m-[7px] border-red-600 border-2 rounded font-bold whitespace-nowrap backdrop-blur-xs ">
        <Link to="/" className = {navbarStyle} onClick={() => {document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });}}>About Us </Link>
        <Link to="/" className = {navbarStyle} onClick={() => {document.getElementById("coaches")?.scrollIntoView({ behavior: "smooth" });}}>Coaches</Link>
        <Link to="/" className = {navbarStyle} onClick={() => {document.getElementById("joinnow")?.scrollIntoView({ behavior: "smooth" });}}>Join Now</Link>  
        <Link to="/members" className = {navbarStyle}>Members</Link>
        <Link to="/news" className = {navbarStyle}>News</Link>
        
        </div>

    </div>
    
);
}

export default Navbar;