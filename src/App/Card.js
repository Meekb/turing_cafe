import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <section className='card'>
      <h2>NAME</h2>
      <p>DATE</p>
      <p>TIME</p>
      <p>Number of guests: num</p>
      <button className='cancel-btn'>Cancel</button>
    </section>
  );
}

export default Card;