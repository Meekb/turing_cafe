import React from 'react';
import Card from './Card';
import './Reservations.css'

const Reservations = ({allReservations}) => {
  const resToDisplay = allReservations.map(res => {
    return (
      <Card  
        id={res.id}
        key={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
      />
    );
  })
  return (
    <section className="reservations-container">
      {resToDisplay}
    </section>
  );

}

export default Reservations;
