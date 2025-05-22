import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'

function App() {
  
  const Navbar = () => {
    const navbarStyle = "border mr-[10px] ml-[10px] m-[5px] p-[4px] rounded hover:bg-red-400"
    return (
      <div className="flex justify-center">
        <div className = "flex border justify-center m-[5px] rounded w-[1000px] h-fit bg-red-500 ">
          <a to="/" className = {navbarStyle}>About Us</a>
          <a to="/contact"className = {navbarStyle}>Coaches</a>
          <p className = {navbarStyle}>Members</p>  
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
    <div className = "bg-black w-dvw h-dvh flex flex-col items-center">
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
