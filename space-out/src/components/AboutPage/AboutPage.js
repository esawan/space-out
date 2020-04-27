import React, { Component } from 'react';
import { render } from 'react-dom';
import IframeComponent from '../IframeComponent';
 
class AboutPage extends Component {
 constructor() {
   super();
   this.state = {
     name: 'React'
   };
 }
  render() {
   return (
     <div className="Content">
        <p>About page is currently under construction.</p> 
     </div>
   );
 }
}
 
render(<AboutPage />, document.getElementById('root'));
 
export default AboutPage;