const fetchAllReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(checkForError)
}

const checkForError = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Oops! Something went wrong.')
  }
};

export { fetchAllReservations }