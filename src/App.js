import React, { Component } from 'react';
import{Link, Route, Switch} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="type">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous" />
        <link rel="stylesheet" href="style.css" />
        <title>Tejas Manjunath</title>
        <div className="grid-2">
          <div className="section-1">
            <i className="fas fa-code fa-5x white" />
            <h2>Tejas Manjunath</h2>
            <p>San Jose,California.</p>
            <a href="https://www.linkedin.com/in/tejas-manjunath-18a442156/"><i className="fab fa-linkedin" /></a>
            <a href="https://github.com/ManjunathTejas"><i className="fab fa-github" /></a>
          </div>
          <div className="section-2">
            <h2>About</h2>
            <p>Welcome to my site! I'm Tejas Manjunath, a recent graduate from UC Santa Cruz . I am currently a Software Engineer at Microsoft. This site is a personal project I've been working on, that I'll routinely be making updates to. Let me know if you have any thoughts. I'd love to connect, please shoot me a message on LinkedIn.  </p>
            <a href="https://drive.google.com/file/d/1e8J5Kx8LNNO-z37LY6U3iTUckY3LTuV5/view?usp=sharing"> <h2>Resume</h2></a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
