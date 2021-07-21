import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitReservation = (event) => {
    event.preventDefault();
    const newReservation = { id: Date.now(), ...this.state }
    this.props.addReservation(newReservation);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({ name: '', date: '', time: '', number: '' })
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='Name' name='name' onChange={(e) => this.handleChange(e)} required />
        <input type='text' placeholder='Date(mm/dd)' name='date' onChange={(e) => this.handleChange(e)} required />
        <input type='text'  placeholder='Time' name='time' onChange={(e) => this.handleChange(e)} required />
        <input type='number' placeholder='Number of guests' onChange={(e) => this.handleChange(e)} name='number' required />
        <button type='submit' className='book-btn' onClick={(event) => this.addReservation(event)}>Make Reservation</button>
      </form>
    );
  }

}

export default Form;