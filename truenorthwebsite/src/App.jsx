import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LOGO from "./assets/rectangle_red_logo.png";
import img from "./assets/image.png";
import './App.css'

function App() {
  
  const Navbar = () => {
    const navbarStyle = "rounded mr-[10px] ml-[10px] m-[5px] p-[4px] w-fit text-white hover:text-gray-400"
    return (

        <div className = "flex border justify-center m-[5px] rounded w-[1000px] h-fit items-center">

          <div className = "w-1/2  m-[5px]">
            <img src={LOGO} className = "w-[150px] rounded"></img>
          </div>

          <div className = "w-fit  h-fit flex justify-end m-[7px] border-red-600 border-2 rounded">
            <a className = {navbarStyle}>About Us</a>
            <a className = {navbarStyle}>Coaches</a>
            <a className = {navbarStyle}>Members</a>
            <a className = {navbarStyle}>News</a>
            <p className = {navbarStyle}>Contact Info</p>  
          </div>

        </div>
        
    );
  }

  const AboutUs = () => {
    return(
      <div className = " text-red-700 w-[1500px] h-dvh flex items-center flex-col justify-center">
        <h1 className = "text-white text-[100px]">True North Table Tennis</h1>
        <p className = " text-gray-400 text-[50px] m-top-50">Where Champtions Rise</p>

        <div className = "text-white flex flex-col items-center">
          <p>Embody the spirit of a champion with resilient, </p>
          <p>fearless, and unstoppable training. Join the King of the</p>
          <p>North and claim your rightful place at the top.</p>
        </div>

      </div>
    );
  }

  const Intro = () => {
    return( 
      <div >
        <p className = "text-white text-[50px] m-top-50 flex items-center flex-col justify-center">Welcome to Toronto's Premier Table Tennis Destination</p>
        <p className = "text-white text-[25px] m-top-100  flex items-center flex-row justify-center">Home of  <div className = "text-red-400">  Champions.</div> Heart of the<div className = "text-red-400">  North.</div></p>
        <div className="flex-1 max-w-xl right" >
          <img src={img} alt="True North Table Tennis Club" className="rounded-lg w-w-xl" />
        </div>
        <div className="flex-1 max-w-xl text-left">
          <p className="text-white text-[20px] text-lg leading-relaxed">
                        At True North Table Tennis Club, our name represents more than a place. It stands for leadership, resilience, and the spirit of a champion.
            “True North” is the King of the North, a force powered by discipline, skill, and unwavering passion.
            <br /><br />
            We train every player to rise with courage, heart, and relentless dedication, both on and off the table.
            Welcome to True North, where champions rise and the King of the North is born.
          </p>
        </div>
        <div className="text-white text-[25px] flex flex-wrap justify-center items-center gap-8 mt-16 text-center text-xl">
        <div className="border-t-2 border-red-500 pt-2">Elite Coaching Team</div>
        <div className="border-t-2 border-red-500 pt-2">State-of-the-Art Facilities</div>
        <div className="border-t-2 border-red-500 pt-2">Tailored Programs for All Levels</div>
        <div className="border-t-2 border-red-500 pt-2">Community and Competition</div>
      </div>
        
      </div>
    );
  }

  const Coaches = () => {
    return( 
      <div >
        <p className = "text-white text-[50px] m-top-50 flex items-center flex-col justify-center">Welcome to Toronto's Premier Table Tennis Destination</p>
        <p className = "text-white text-[25px] m-top-100  flex items-center flex-row justify-center">Home of  <div className = "text-red-400">  Champions.</div> Heart of the<div className = "text-red-400">  North.</div></p>
        <div className="flex-1 max-w-xl right" >
          <img src={img} alt="True North Table Tennis Club" className="rounded-lg w-w-xl" />
        </div>
        <div className="flex-1 max-w-xl text-left">
          <p className="text-white text-[20px] text-lg leading-relaxed">
                        At True North Table Tennis Club, our name represents more than a place. It stands for leadership, resilience, and the spirit of a champion.
            “True North” is the King of the North, a force powered by discipline, skill, and unwavering passion.
            <br /><br />
            We train every player to rise with courage, heart, and relentless dedication, both on and off the table.
            Welcome to True North, where champions rise and the King of the North is born.
          </p>
        </div>
        <div className="text-white text-[25px] flex flex-wrap justify-center items-center gap-8 mt-16 text-center text-xl">
        <div className="border-t-2 border-red-500 pt-2">Elite Coaching Team</div>
        <div className="border-t-2 border-red-500 pt-2">State-of-the-Art Facilities</div>
        <div className="border-t-2 border-red-500 pt-2">Tailored Programs for All Levels</div>
        <div className="border-t-2 border-red-500 pt-2">Community and Competition</div>
      </div>
        
      </div>
    );
  }

  return (
    <div className = " bg-black w-dvw h-dvh flex flex-col items-center">
      <Navbar/>
         <Router>
          <Routes>
            <Route path="/" element={<Coaches/>} />
            {/* <Route path="/about" element={} />
            <Route path="/contact" element={} /> */}
          </Routes>
        </Router>
    </div>
  )
}

export default App
