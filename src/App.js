import React from 'react';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import './Components/Data/Data';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  
 return (
  <Router>
 <Home></Home>
        <Courses></Courses>
 </Router> 
 );
}

export default App;
