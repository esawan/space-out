import React, { Component } from 'react';
import { render } from 'react-dom';
import IframeComponent from './IframeComponent';
//import './style.css';

class Kids extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <IframeComponent src="//cdn.witchhut.com/html5/games/color-me-princess/" height="600px" width="800px"/>
      </div>
    );
  }
}

render(<Kids />, document.getElementById('root'));

export default Kids;