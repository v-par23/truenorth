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
      <div className = " text-red-700">
        Jashan
      </div>
    );
  }
  return (
    <div className = "bg-black w-dvw h-dvh flex flex-col">
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
