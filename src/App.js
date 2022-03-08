import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import { useLocation } from 'react-router-dom';
import './App.css';
//import Header from './components/Header';
import Submitpage from './components/Submitpage';
//import Footer from './components/Footer';
import Home from './components/Home';
import Land from './components/Land';
import Notfound from './components/Notfound'; 
import BlogDetails from './components/BlogDetails';
import Feedback from './components/Feedback';
function App() {
  //const location= useLocation();
  return (
    <Router>    
      <Routes>
        <Route path='/' element={<Land/>}/>
        <Route path='/addpage' element={<Home/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
     <Route path='/blogdetails/:id' element={<BlogDetails/>}/>
     <Route path='/submitpage' element={<Submitpage />}/>
     <Route path='*' element={<Notfound/>}/>
     </Routes>
    </Router>  
  );
}

export default App;
