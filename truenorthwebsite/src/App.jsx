import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Home from "./Home";
import Members from "./Members";
import News from "./News";
import CoachOne from "./coachpages/CoachOne";
import CoachTwo from './coachpages/CoachTwo.Jsx';
import CoachThree from './coachpages/CoachThree';
import CoachFour from './coachpages/CoachFour';

function App() {  
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/members" element={<Members/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/coaches/coachone" element={<CoachOne/>}/>
        <Route path="/coaches/coachtwo" element={<CoachTwo/>}/>
        <Route path="/coaches/coachthree" element={<CoachThree/>}/>
        <Route path="/coaches/coachfour" element={<CoachFour/>}/>
      </Routes>
    </div>
  )
}

export default App;
