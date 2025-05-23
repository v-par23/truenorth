import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LOGO from "./assets/rectangle_red_logo.png";
import './App.css'

function App() {
  
  const Navbar = () => {
    const navbarStyle = "rounded mr-[10px] ml-[10px] m-[5px] p-[4px] hover:bg-red-400 w-fit"
    return (

        <div className = "flex border justify-center m-[5px] rounded w-[1000px] h-fit items-center bg-red-700 bg-gradient-to-bl to-white">

          <div className = "w-1/2  m-[5px]">
            <img src={LOGO} className = "w-[150px] rounded"></img>
          </div>

          <div className = "w-1/2  flex justify-end m-[5px]">
            <a className = {navbarStyle}>About Us</a>
            <a className = {navbarStyle}>Members</a>
            <p className = {navbarStyle}>Contact Us</p>  
          </div>

        </div>
        
    );
  }

  const AboutUs = () => {
    return(
      <div className = " text-red-700 algin-center border w-[1500px] h-fit">
        <div className = " w-100% m-[10px] border h-[100px]">
          TrueNorth
        </div>
        <div className = "w-100% h-[fit] flex m-[10px]">
          <div className = "border w-1/2 h-[150px] border-box mr-[5px]"></div>
          <div className = "border w-1/2 h-[150px] border-box ml-[5px]"></div>
        </div>
      </div>
    );
  }
  return (
    <div className = "bg-[#050124] w-dvw h-dvh flex flex-col items-center">
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
