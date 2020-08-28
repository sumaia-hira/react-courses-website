import React, { useState } from 'react';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Contact from './Components/Contact/Contact';
import './App.css';
import './Components/Data/Data';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  
 return (
  <Router>
<Navbar></Navbar>
<Switch >
   <Route exact path='/' >{Home}</Route>
   <Route exact path='/courses' >{Courses}</Route>
   <Route exact path='/contact' >{Contact}</Route>
 </Switch>
 
 </Router> 

 
  );
}

export default App;
