import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <input className='name' type='text' placeholder='Name' name='name' value={this.state.name} onChange={(e) => this.handleChange(e)} required />
        <input className='date' type='text' placeholder='Date(mm/dd)' name='date' value={this.state.date} onChange={(e) => this.handleChange(e)} required />
        <input className='time' type='text'  placeholder='Time' name='time' value={this.state.time} onChange={(e) => this.handleChange(e)} required />
        <input className='number' type='number' placeholder='Number of guests' value={this.state.number} onChange={(e) => this.handleChange(e)} name='number' required />
        <button type='submit' className='book-btn' onClick={(e) => this.submitReservation(e)}>Make Reservation</button>
      </form>
    );
  }

}

export default Form;