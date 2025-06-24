import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LOGO from "./assets/rectangle_red_logo.png";
import './App.css'

function App() {
  
  const Navbar = () => {
    const navbarStyle = "rounded mr-[10px] ml-[10px] m-[5px] p-[4px] w-fit text-white hover:text-gray-300"
    return (

        <div className = "flex justify-center m-[5px] mt-[40px] rounded w-3/4 h-fit items-center">

          <div className = "w-1/2  m-[5px]">
            <img src={LOGO} className = "w-[170px] rounded"></img>
          </div>

          <div className = "w-fit  h-fit flex justify-end m-[7px] border-red-600 border-2 rounded font-bold whitespace-nowrap">
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
      <div className = " text-red-700 w-[1500px] h-dvh flex items-center flex-col justify-center ">
        <div className = "text-white text-[80px]">True North Table Tennis</div>
        <div className = " text-gray-400 text-[45px]">Where Champions Rise</div>

        <div className = "text-white flex flex-col items-center mt-[20px] text-[25px]">
          <p>Embody the spirit of a champion with resilient, </p>
          <p>fearless, and unstoppable training. Join the King of the</p>
          <p>North and claim your rightful place at the top.</p>
        </div>

        <div className = "flex flex-row mt-[40px]">
          <div className = "bg-red-600 w-[150px] h-[75px] rounded flex justify-center items-center text-white m-[10px] text-2xl font-bold hover:bg-red-700">
            Join Now
          </div>
          <div className = "bg-gray-800 w-[150px] h-[75px] rounded flex justify-center items-center text-white m-[10px] border-2 border-gray-500 text-2xl font-bold hover:bg-gray-900 hover:border-gray-600">
            Learn More
          </div>
        </div>

      </div>
    );
  }
  return (
    <div className = " w-dvw h-dvh flex flex-col items-center bg-gradient-to-br via-black from-red-900 to-red-900">
      <Navbar/>
         <Router>
          <Routes>
            <Route path="/" element={<AboutUs/>} />
            {/* <Route path="/about" element={} />
            <Route path="/contact" element={} /> */}
          </Routes>
        </Router>
    </div>
  )
}

export default App
