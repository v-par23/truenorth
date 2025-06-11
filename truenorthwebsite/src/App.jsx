import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LOGO from "./assets/rectangle_red_logo.png";
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

  // const Intro = () => {
  //   return(
  //     <div>
  //       <h1>True North Table Tennis</h1>
  //     </div>
  //   );
  // }

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
  return (
    <div className = " bg-black w-dvw h-dvh flex flex-col items-center">
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
