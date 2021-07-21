import React, { Component } from 'react';
import Reservations from './Reservations';
import '../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations  />
        </div>
      </div>
    )
  }
}

export default App;
