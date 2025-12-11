import IMG1 from "../assets/image_1.png";
// import IMG2 from "../assets/image_2.png"; // Temporarily commented out
import IMG3 from "../assets/image_3.png";
// import IMG4 from "../assets/image_4.png"; // Temporarily commented out
import img from "../assets/image.png";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Home = () => {
  const [aboutUsAnimated, setAboutUsAnimated] = useState(false);

    useEffect(() => {
      setAboutUsAnimated(true);
  }, []);

     const AboutUs = () => {
  return(
    <motion.div id="home" className="text-red-700 w-full min-h-screen flex items-center flex-col justify-center px-4 sm:px-6 lg:px-8 py-8"
    initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={aboutUsAnimated ? { clipPath: "inset(0 0% 0 0)" } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      
      {/* Main Title */}
      <motion.div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center leading-tight mb-4"
      
      >
        TrueNorth Table Tennis
      </motion.div>

      {/* Subtitle */}
      <div className="text-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-center mb-8">
        Where Champions Rise
      </div>

      {/* Description */}
      <div className="text-white text-center max-w-4xl mb-10">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-extralight leading-relaxed">
          Embody the spirit of a champion with resilient, fearless, and unstoppable training. 
          Join the King of the North and claim your rightful place at the top.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button onClick={() => {document.getElementById("joinnow")?.scrollIntoView({ behavior: "smooth" });}} className="bg-red-600 px-6 py-4 sm:px-8 sm:py-4 rounded-lg flex justify-center items-center text-white text-lg sm:text-xl lg:text-2xl font-bold hover:bg-red-700 transition-colors duration-300 min-w-[150px] shadow-lg hover:shadow-xl transform hover:scale-105">
          Join Now
        </button>
        
        <button onClick={() => {document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });}} className="bg-gray-800 px-6 py-4 sm:px-8 sm:py-4 rounded-lg flex justify-center items-center text-white border-2 border-gray-500 text-lg sm:text-xl lg:text-2xl font-bold hover:bg-gray-900 hover:border-gray-600 transition-all duration-300 min-w-[150px] shadow-lg hover:shadow-xl transform hover:scale-105">
          Learn More
        </button>
      </div>

    </motion.div>
  );
}

  const Intro = () => {
  return( 
    <div className="min-h-screen flex justify-center flex-col px-4 sm:px-6 lg:px-8 py-8 mb-[250px] md:mb-0" id="intro">
      
      {/* Welcome Header */}
      <div className="text-center mb-8">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          Welcome to Toronto's Premier Table Tennis Destination
        </h1>
        
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 font-extralight">
          Home of <span className="text-red-600">Champions.</span> Heart of the 
          <span className="text-red-600"> North.</span>
        </p>
      </div>
      
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-12 lg:mb-16">
        
        {/* Image Section */}
        <motion.div className="w-full lg:flex-1 max-w-md lg:max-w-xl"
          whileHover={{scale:1.1}}
        >
          <img 
            src={img} 
            alt="True North Table Tennis Club" 
            className="rounded-lg w-full h-auto object-cover shadow-lg" 
          />
        </motion.div>
        
        {/* Text Section */}
        <div className="w-full lg:flex-1 max-w-md lg:max-w-xl text-center lg:text-left">
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-light">
            At True North Table Tennis Club, our name represents more than a place. It stands for leadership, resilience, and the spirit of a champion.
            "True North" is the King of the North, a force powered by discipline, skill, and unwavering passion.
          </p>
          <br />
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-light">
            We train every player to rise with courage, heart, and relentless dedication, both on and off the table.
            Welcome to True North, where champions rise and the King of the North is born.
          </p>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            "Elite Coaching Team",
            "State-of-the-Art Facilities", 
            "Tailored Programs for All Levels",
            "Community and Competition",
          ].map((label) => (
            <div key={label} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 border-t-2 border-red-600 mb-3"></div>
              <p className="text-white text-sm sm:text-base md:text-lg font-extralight leading-relaxed">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
    
    const Coaches = () => {
  return(
    <div className="text-white w-full px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col min-h-screen py-8 scroll-mt-[120px] md:scroll-mt-0 mb-[250px] md:mb-0" id="coaches">
      {/* Header Section */}
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
        Meet Our Coaches
      </div>
      
      {/* Description Section */}
      <div className="text-center max-w-4xl mb-8">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-extralight mb-2">
          <span className="text-red-600">Professional</span> and 
          <span className="text-red-600"> experienced </span> 
          coaching team from entry-level to top performance,
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-extralight">
          TrueNorth has the best coaches to meet your 
          <span className="text-red-600"> expectations.</span>
        </p>
      </div>

      {/* Coaches Grid */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          
          {/* Coach 1 */}
          <motion.div className="flex items-center flex-col p-4 rounded-lg transition-colors"
          whileHover={{scale:1.1}}>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Eugene Wang</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 text-center">Founder & Head Coach</p>
            <img src={IMG3} className="w-full max-w-[200px] aspect-square object-cover rounded-lg mb-4" alt="Eugene Wang"/>
            <Link 
              to="/coaches/coachone" 
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded font-bold text-sm sm:text-base transition-colors text-center"
            >
              More Info
            </Link>
          </motion.div>

          {/* Coach 2 */}
          <motion.div className="flex items-center flex-col p-4 rounded-lg transition-colors"
          whileHover={{scale:1.1}}>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Hongtao Chen</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 text-center">Co-founder & Head Coach</p>
            <img src={IMG1} className="w-full max-w-[200px] aspect-square object-cover rounded-lg mb-4" alt="Hongtao Chen"/>
            <Link 
              to="/coaches/coachtwo" 
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded font-bold text-sm sm:text-base transition-colors text-center"
            >
              More Info
            </Link>
          </motion.div>

          {/* Coach 3 - Temporarily Commented Out
          <motion.div className="flex items-center flex-col p-4 rounded-lg  transition-colors"
          whileHover={{scale:1.1}}>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Mo Zhang</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 text-center">Head Coach</p>
            <img src={IMG4} className="w-full max-w-[200px] aspect-square object-cover rounded-lg mb-4" alt="Mo Zhang"/>
            <Link 
              to="/coaches/coachthree" 
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded font-bold text-sm sm:text-base transition-colors text-center"
            >
              More Info
            </Link>
          </motion.div>

          Coach 4 - Temporarily Commented Out
          <motion.div className="flex items-center flex-col p-4 rounded-lg transition-colors
          "
          whileHover={{scale:1.1}}>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Ye Lin</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 text-center">Head Coach</p>
            <img src={IMG2} className="w-full max-w-[200px] aspect-square object-cover rounded-lg mb-4" alt="Ye Lin"/>
            <Link 
              to="/coaches/coachfour" 
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded font-bold text-sm sm:text-base transition-colors text-center"
            >
              More Info
            </Link>
          </motion.div>
          */}
        </div>
      </div>
    </div>
  );
}

    const Train = () => {
  return(
    <div className="text-red-700 w-full min-h-screen flex items-center flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 scroll-mt-[120px] md:scroll-mt-0" id="joinnow">
      
      {/* Header */}
      <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
        Train With Us
      </div>
      
      {/* Classes Grid */}
      <div className="w-full max-w-7xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Rising Star Class */}
            <div className="border border-gray-600 rounded-lg p-4 sm:p-6 bg-gray-900/20 hover:bg-gray-900/40 transition-colors flex flex-col">
              <h1 className="text-red-600 text-xl sm:text-2xl font-bold">Rising Star Class</h1>
            <div className="mb-4">
              <p className="text-red-600 font-semibold mb-2">Time:</p>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                Saturday 3:30-5:30pm
              </p>
            </div>
            
            <div className="mb-6">
              <p className="text-red-600 font-semibold mb-2">Price:</p>
              <p className="text-white text-sm sm:text-base">Drop In: $50/session</p>
            </div>
            <p className="text-red-600 text-lg sm:text-xl font-semibold mt-auto">Limited Spots Available</p>
          </div>
          {/* Competition Class */}
          <div className="border border-gray-600 rounded-lg p-4 sm:p-6 bg-gray-900/20 hover:bg-gray-900/40 transition-colors flex flex-col">
            <h1 className="text-red-600 text-xl sm:text-2xl font-bold">Competition Class</h1>
            <div className="mb-4">
              <p className="text-red-600 font-semibold mb-2">Time:</p>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                Saturday 9:30-12:30pm<br/>
                Sunday 9:30-12:30pm
              </p>
            </div>
            
            <div className="mb-6">
              <p className="text-red-600 font-semibold mb-2">Price:</p>
              <p className="text-white text-sm sm:text-base">Drop In: $90/session</p>
            </div>
            
            <p className="text-red-600 text-lg sm:text-xl font-semibold mt-auto">Limited Spots Available</p>
          </div>
        </div>
      </div>

  <div className="text-center mt-12 ">
    <h2 className="text-3xl font-bold text-red-500 mb-6">Want to learn more?</h2>

    <div className="inline-flex flex-col items-start space-y-3">
      <a
        href="tel:+14165257624"
        className="flex items-center text-white hover:text-red-400 transition"
      >
        <Phone className="w-5 h-5 text-red-500 mr-2" /> 
        (416) 525‑7624
      </a>

      <a
        href="mailto:truenorthtabletennis@hotmail.com"
        className="flex items-center text-white hover:text-red-400 transition"
      >
        <Mail className="w-5 h-5 text-red-500 mr-2" /> 
        truenorthtabletennis@hotmail.com
      </a>

      <a
        href="https://www.instagram.com/truenorthttc"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white hover:text-red-400 transition"
      >
        <Instagram className="w-5 h-5 text-red-500 mr-2" /> 
        @truenorthttc
      </a>

      <a
        href="https://g.co/kgs/Pukix6w"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white hover:text-red-400 transition"
      >
        <MapPin className="w-5 h-5 text-red-500 mr-2" /> 
        3470 Pharmacy Ave, Scarborough, ON M1W 2S7
      </a>
    </div>
  </div>

    </div>
  );
}
 
    

    return(
        <div className = " w-dvw h-fit flex flex-col items-center bg-gradient-to-br via-black from-red-900 to-red-900">
            <Navbar/>
            <AboutUs/>
            <Intro/>
            <Coaches/>
            <Train/>
            <footer className="w-full text-center py-6 mt-12 text-gray-400 text-sm border-t border-gray-700 bg-black/30">
                &copy; {new Date().getFullYear()} TrueNorth Table Tennis Club™. All rights reserved.
            </footer>
        </div>
    );
}
export default Home;