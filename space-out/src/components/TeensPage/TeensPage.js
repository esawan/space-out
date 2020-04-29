import React, { Component } from 'react';
import { render } from 'react-dom';
import IframeComponent from '../IframeComponent';
//import './style.css';

class TeensPage extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="Content">
        <IframeComponent src="https://www.youtube.com/embed/5qap5aO4i9A" height="600px" width="800px"/>
        <IframeComponent src="https://www.youtube.com/embed/lKOVYw9R7oI?list=PL8dGAkToq6oURaC2BC_lrYSIKydqlfSVB" height="600px" width="800px"/>
        <IframeComponent src="https://theuselessweb.com/" height="600px" width="800px"/>
        <IframeComponent src="https://quickdraw.withgoogle.com/" height="600px" width="800px"/>
        <IframeComponent src="https://boomplop.com/games/pickems-tiny-adventure/play" height="600px" width="800px"/>
        <p>💫</p>
      </div>
    );
  }
}

render(<TeensPage />, document.getElementById('root'));

export default TeensPage;