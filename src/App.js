import React, { Component } from 'react';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Sidebar />

        <div className="App-content">
        </div>
      </div>
    );
  }
}

export default App;
