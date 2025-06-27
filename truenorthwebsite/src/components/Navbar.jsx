// import { Link } from 'react-router-dom';
// import LOGO from "../assets/rectangle_red_logo.png";

// const Navbar = () => {
// const navbarStyle = "rounded mr-[10px] ml-[10px] m-[5px] p-[4px] w-fit text-white hover:text-gray-300"
// return (

//     <div className = "flex justify-center m-[5px] mt-[40px] rounded w-3/4 h-fit items-center fixed ">

//         <div className = "w-1/2  m-[5px]">
//         <img src={LOGO} className = "w-[170px] rounded"></img>
//         </div>

//         <div className = "w-fit h-fit flex justify-end m-[7px] border-red-600 border-2 rounded font-bold whitespace-nowrap backdrop-blur-md bg-black/80">
//         <Link to="/" className = {navbarStyle} onClick={() => {document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });}}>About Us </Link>
//         <Link to="/" className = {navbarStyle} onClick={() => {document.getElementById("coaches")?.scrollIntoView({ behavior: "smooth" });}}>Coaches</Link>
//         <Link to="/" className = {navbarStyle} onClick={() => {document.getElementById("joinnow")?.scrollIntoView({ behavior: "smooth" });}}>Join Now</Link>  
//         <Link to="/members" className = {navbarStyle}>Members</Link>
//         <Link to="/news" className = {navbarStyle}>News</Link>
        
//         </div>

//     </div>
    
// );
// }

// export default Navbar;







import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LOGO from "../assets/rectangle_red_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // untouched
  const navbarStyle =
    "rounded mr-[10px] ml-[10px] m-[5px] p-[4px] w-fit text-white hover:text-gray-300";

  return (
    <div
      className="
        fixed top-0 left-1/2 transform -translate-x-1/2
        flex justify-center         /* center on small */
        md:justify-center          /* same for now */
        m-[5px] mt-[40px] rounded
        w-full md:w-3/4 h-fit items-center
        px-4 bg-transparent z-50
      "
    >
      {/* logo */}
      <div className="w-1/2 m-[5px]">
        <img src={LOGO} className="w-[170px] rounded" alt="Logo" />
      </div>

      {/* Desktop: no wrap + tighter to logo */}
      <div
        className="
          hidden md:flex
          h-fit flex-nowrap           /* KEEP ALL LINKS ON ONE ROW */
          justify-end
          my-[7px] mx-0              /* remove horizontal margin */
          border-red-600 border-2 rounded font-bold
          whitespace-nowrap
          backdrop-blur-md bg-black/80
        "
      >
        <Link
          to="/"
          className={navbarStyle}
          onClick={() =>
            document
              .getElementById("intro")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          About Us
        </Link>
        <Link
          to="/"
          className={navbarStyle}
          onClick={() =>
            document
              .getElementById("coaches")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Coaches
        </Link>
        <Link
          to="/"
          className={navbarStyle}
          onClick={() =>
            document
              .getElementById("joinnow")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Join Now
        </Link>
        <Link to="/members" className={navbarStyle}>
          Members
        </Link>
        <Link to="/news" className={navbarStyle}>
          News
        </Link>
      </div>

      {/* Mobile hamburger (unchanged) */}
      <button
        className="md:hidden ml-auto text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile dropdown (unchanged) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 border-t border-red-600 backdrop-blur-md flex flex-col items-center md:hidden">
          <Link
            to="/"
            className={navbarStyle + " block w-full text-center"}
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("intro")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Us
          </Link>
          <Link
            to="/"
            className={navbarStyle + " block w-full text-center"}
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("coaches")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Coaches
          </Link>
          <Link
            to="/"
            className={navbarStyle + " block w-full text-center"}
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("joinnow")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join Now
          </Link>
          <Link
            to="/members"
            className={navbarStyle + " block w-full text-center"}
            onClick={() => setIsOpen(false)}
          >
            Members
          </Link>
          <Link
            to="/news"
            className={navbarStyle + " block w-full text-center"}
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
        </div>
      )}
    </div>
  );
};

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
