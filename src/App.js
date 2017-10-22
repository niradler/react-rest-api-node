import React, { Component } from 'react';
import AddNewProject from './AddNewProject';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React and rest-api-node</h1>
        </header>
        
      <div>
        <AddNewProject /> 
        </div> 
        <div>
        list of projects
        </div> 
      </div>
    );
  }
}

export default App;
