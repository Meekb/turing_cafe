import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state ={

    }
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='Name' required />
        <input type='text' placeholder='Date(mm/dd)' required />
        <input type='text'  placeholder='Time' required />
        <input type='number' placeholder='Number of guests' required />
        <button type='submit'>Make Reservation</button>
      </form>
    );
  }

}

export default Form;