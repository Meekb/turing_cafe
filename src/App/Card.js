import React from 'react';
import './Card.css';

const Card = ({id, key, name, date, time, number}) => {
  return (
    <section id={id} key={key} className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button className='cancel-btn'>Cancel</button>
    </section>
  );
}

export default Card;