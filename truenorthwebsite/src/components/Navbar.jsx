import { Link } from 'react-router-dom';
import LOGO from "../assets/rectangle_red_logo.png";
import { useNavigate } from 'react-router-dom';

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

    <div className = "flex justify-center m-[5px] mt-[40px] rounded w-3/4 h-fit items-center fixed ">

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

    </div>
    
);
}

export default Navbar;











// import { Link } from "react-router-dom";
// import LOGO from "../assets/rectangle_red_logo.png";

// const Navbar = () => {
//   // responsive mx: small→2, md+→10; keep small padding so links shrink
//   const navbarStyle =
//     "rounded mx-2 md:mx-[10px] my-[5px] px-2 py-[4px] w-fit text-white hover:text-gray-300";

//   return (
//     <div
//       className="
//         fixed top-0 left-1/2 transform -translate-x-1/2
//         flex justify-center items-center
//         w-full md:w-3/4 
//         px-2 md:px-4       /* gutter on small & md+ */
//         m-[5px] mt-[40px] rounded
//         bg-transparent z-50
//       "
//     >
//       {/* logo hides below md */}
//       <div className="hidden md:block w-1/2 m-[5px]">
//         <img src={LOGO} className="w-[170px] rounded" alt="Logo" />
//       </div>

//       {/* always-visible links, no wrap */}
//       <div
//         className="
//           flex flex-nowrap justify-center
//           w-fit h-fit
//           border-red-600 border-2 rounded
//           font-bold whitespace-nowrap
//           backdrop-blur-md bg-black/80
//         "
//       >
//         <Link
//           to="/"
//           className={navbarStyle}
//           onClick={() =>
//             document
//               .getElementById("intro")
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//         >
//           About Us
//         </Link>
//         <Link
//           to="/"
//           className={navbarStyle}
//           onClick={() =>
//             document
//               .getElementById("coaches")
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//         >
//           Coaches
//         </Link>
//         <Link
//           to="/"
//           className={navbarStyle}
//           onClick={() =>
//             document
//               .getElementById("joinnow")
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//         >
//           Join Now
//         </Link>
//         <Link to="/members" className={navbarStyle}>
//           Members
//         </Link>
//         <Link to="/news" className={navbarStyle}>
//           News
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
