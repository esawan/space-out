import React, { Component } from 'react';
import { render } from 'react-dom';
import IframeComponent from '../IframeComponent';
//import './style.css';

class KidsPage extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="Content">
        <IframeComponent src="//cdn.witchhut.com/html5/games/color-me-pets/" height="600px" width="800px"/>
        <IframeComponent src="//cdn.witchhut.com/html5/games/trick-hoops-puzzle-edition/" height="600px" width="800px"/>
        <IframeComponent src="https://boomplop.com/games/boomplop-draw/play" height="600px" width="800px"/>
        <IframeComponent src="https://www.youtube.com/embed/wf5K3pP2IUQ" height="600px" width="800px"/>
        <IframeComponent src="https://www.youtube.com/embed/videoseries?list=PLrOK2BUgNUQO6A0Z3jYTkFITI5ZZ-v5Iz" height="600px" width="800px"/>
        <p>💫</p>
      </div>
    );
  }
}

render(<KidsPage />, document.getElementById('root'));

export default KidsPage;