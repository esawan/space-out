import React, { Component } from 'react';
import { render } from 'react-dom';
import IframeComponent from '../IframeComponent';
//import './style.css';
 
class AdultsPage extends Component {
 constructor() {
   super();
   this.state = {
     name: 'React'
   };
 }
  render() {
   return (
     <div className="Content">
       <IframeComponent src="http://mandalamaker.online/mandalaembed.html" height="600px" width="800px"/>
       <IframeComponent src="https://www.youtube.com/embed/4AtJV7U3DlU" height="600px" width="800px"/>
       <IframeComponent src="https://www.youtube.com/embed/videoseries?list=PLui6Eyny-Uzy0o-rTUNVczfgF5AjNyCPH" height="600px" width="800px"/>
       <IframeComponent src="https://www.youtube.com/embed/videoseries?list=PLUISvii9kE48PCHhfGE2ZJ3BmfZlCU36V" height="600px" width="800px"/>
     </div>
   );
 }
}
 
render(<AdultsPage />, document.getElementById('root'));
 
export default AdultsPage;
