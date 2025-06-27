import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Home from "./components/Home.jsx";
import Members from "./components/Members";
import News from "./components/News";
import CoachOne from "./coachpages/CoachOne";
import CoachTwo from './coachpages/CoachTwo.jsx';
import CoachThree from './coachpages/CoachThree';
import CoachFour from './coachpages/CoachFour';
import ScrollToTop from './components/scroll.jsx';

function App() {  
  return (
    <div >
        <ScrollToTop />
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
