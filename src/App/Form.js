import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
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

  render() {
    return (
      <form>
        <input type='text' placeholder='Name' name='name' onChange={(e) => this.handleChange(e)} required />
        <input type='text' placeholder='Date(mm/dd)' name='date' onChange={(e) => this.handleChange(e)} required />
        <input type='text'  placeholder='Time' name='time' onChange={(e) => this.handleChange(e)} required />
        <input type='number' placeholder='Number of guests' onChange={(e) => this.handleChange(e)} name='number' required />
        <button type='submit' className='book-btn'>Make Reservation</button>
      </form>
    );
  }

}

export default Form;