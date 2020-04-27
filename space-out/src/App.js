import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import KidsPage from "./components/KidsPage/KidsPage";
import TeensPage from "./components/TeensPage/TeensPage";

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
        Kids
      </div>
     
      <div className="TeensTab">
        Teens
      </div>
      
      <div className="AdultsTab">
        Adults
      </div>
      
      <div className="AboutTab">
        About
      </div>
      <Route exact path = "/" component = {HomePage}/>
      </Router>

      <div className="Content">
         <p>Welcome to S P A C E  O U T</p> 
         <p>A place to relax :)</p>
         <TeensPage/>
         <h1></h1>
      </div>

    </div>
  );
}

export default App;