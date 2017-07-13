import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      {name: 'Complete iOS Dev Course', price: 199},
      {name: 'Complete Pentesting Course', price: 299},
      {name: 'Complete Front End Dev Course', price: 180},
      {name: 'Bug Bounty and Web App Pentesting', price: 190}
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to course purchase page!</h2>
        </div>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
