import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import KidsPage from "./components/KidsPage/KidsPage";
import TeensPage from "./components/TeensPage/TeensPage";
import AdultsPage from "./components/AdultsPage/AdultsPage";
import AboutPage from "./components/AboutPage/AboutPage";

/**
 * Need to run this on command line to get router to work on page. 
 * This is installing the react-router-dom module. 
 * npm install -S react-router-dom
 * npm install react-router-dom --save
 */

function App() {
  return (
    <div className="App">
      <header className="Header">
       <div>SPACE 💫 OUT</div> 
      </header>

      <Router>
      <div className="HomeTab" id="Tabs">
      <Link to="/" style={{color: 'inherit', textDecoration: 'inherit', display: 'block'}}><p> Home </p></Link>
      </div>

      <div className="KidsTab" id="Tabs">
      <Link to='/kids'style={{color: 'inherit', textDecoration: 'inherit', display: 'block'}}> Kids </Link>
      </div>
     
      <div className="TeensTab" id="Tabs">
      <Link to='/teens'style={{color: 'inherit', textDecoration: 'inherit', display: 'block'}}> Teenagers </Link>
      </div>
      
      <div className="AdultsTab" id="Tabs">
      <Link to='/adults'style={{color: 'inherit', textDecoration: 'inherit', display: 'block'}}> Adults </Link>
      </div>
      
      <div className="AboutTab" id="Tabs">
      <Link to='/about'style={{color: 'inherit', textDecoration: 'inherit', display: 'block'}}> About </Link>
      </div>

      <Route exact path = "/" component = {HomePage}/>
      <Route exact path = "/kids" component = {KidsPage}/>
      <Route exact path = "/teens" component = {TeensPage}/>
      <Route exact path = "/adults" component = {AdultsPage}/>
      <Route exact path = "/about" component = {AboutPage}/>
      </Router>
      
    </div>
  );
}

export default App;