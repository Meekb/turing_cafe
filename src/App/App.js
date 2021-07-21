import React, { Component } from 'react';
import Reservations from './Reservations';
import Form from './Form';
import { fetchAllReservations } from '../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allReservations: [],
    }
  }

  componentDidMount() {
    fetchAllReservations()
    .then(
      (resData) => {
        this.setState({ allReservations: resData })
      })
    .catch(error => console.log({error}))
  }

  addReservation(newReservation) {
    this.setState({ ...this.state.allReservations, newReservation })
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations allReservations={this.state.allReservations} />
        </div>
      </div>
    )
  }
}

export default App;
