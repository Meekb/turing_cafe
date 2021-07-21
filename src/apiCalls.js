const fetchAllReservations = () => {
  fetch('http://localhost:3001/api/v1/reservations')
  .then(data => data.json())
  // .then(checkForError)
}

// const checkForError = () => {
//   if ()
// }

export default { fetchAllReservations }