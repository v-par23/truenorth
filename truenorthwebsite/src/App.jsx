import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Home from "./Home";
import Members from "./Members";
import News from "./News";

function App() {  
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/members" element={<Members/>}/>
        <Route path="/news" element={<News/>}/>
      </Routes>
    </div>
  )
}

export default App;
