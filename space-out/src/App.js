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
 * Need to run this on command line to get router to work on page; 
 * npm install -S react-router-dom
 * or this idk
 * npm install react-router-dom --save
 */

function App() {
  return (
    <div className="App">
      <header className="Header">
        S P A C E  O U T 
      </header>

      <Router>
      <div className="HomeTab">
      <Link to="/" style={{textDecoration: 'none'}}> Home </Link>
      </div>

      <div className="KidsTab">
      <Link to='/kids'style={{textDecoration: 'none'}}> Kids </Link>
      </div>
     
      <div className="TeensTab">
      <Link to='/teens'style={{textDecoration: 'none'}}> Teens </Link>
      </div>
      
      <div className="AdultsTab">
      <Link to='/adults'style={{textDecoration: 'none'}}> Adults </Link>
      </div>
      
      <div className="AboutTab">
      <Link to='/about'style={{textDecoration: 'none'}}> About </Link>
      </div>

      <Route exact path = "/" component = {HomePage}/>
      <Route exact path = "/kids" component = {KidsPage}/>
      <Route exact path = "/teens" component = {TeensPage}/>
      </Router>

      <div className="Content">
         <p>Welcome to S P A C E  O U T</p> 
         <p>A place to relax :)</p>
         <HomePage/>
         <h1></h1>
      </div>

    </div>
  );
}

export default App;