import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kids from "./Kids";

function App() {
  return (
    <div className="App">
      <header className="Header">
        S P A C E  O U T 
      </header>

      <div className="HomeTab">
        Home
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

      <div className="Content">
         <p>Welcome to S P A C E  O U T</p> 
         <p>A place to relax :)</p>
         <Kids/>
         <h1></h1>
      </div>
    </div>
  );
}

export default App;