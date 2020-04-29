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
     <div className="Content" id="Descriptions">
        <h2>SPACE 💫 OUT was created by four stressed out college students who figured 
          we could all use a little less stress in our lives.</h2>

        <p>While it’s easy to recognize that too much stress is bad for your health, it can be difficult 
          to know what to do about it. Our hope is that SPACE 💫 OUT can help with relieving that stress, 
          or at least help you to find activities that can assist in calming you down.</p>

        <p>We realize that everyone handles stress differently, and therefore different things calm 
          different people down. We also recognize the importance of age related activities, 
          which is which is why our site is split into different tabs. Therefore, we compiled a multitude 
          of different resources, from music to crafts to games you can play right on our site, in the 
          hopes that you’ll find something that works for you.</p>

        <p>If you want to do some additional reading about how stress affects your health written 
          by people who know more than we do, here are our favorite links we’ve compiled! :) </p>
        
        <p>5 Things You Should Know About Stress</p>
        <p>(https://www.nimh.nih.gov/health/publications/stress/index.shtml)</p>
       
        <p>How to Be Better at Stress</p>
        <p>(https://www.nytimes.com/guides/well/how-to-deal-with-stress)</p>
        
        <p>Stress Management</p>
        <p>(https://www.helpguide.org/articles/stress/stress-management.htm)</p>
       
        <h2>Thanks for reading this far! Here’s a fun space pun: Are you a meteor? Because you rock my world!</h2>
        <p>💫</p>

     </div>
   );
 }
}
 
render(<AboutPage />, document.getElementById('root'));
 
export default AboutPage;