import React, { Component } from 'react';
import Grid from './components/grid.js';
import Header from './components/header.js'


class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'100vh', width:'100vw', position:'absolute'}}>
      <Header/>
      <Grid/>
      </div>
    );
  }
}

export default App;
