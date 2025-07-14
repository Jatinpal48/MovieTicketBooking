import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingId, name, email, mobile } = location.state || {};

  if (!bookingId) return <p>No booking found. Please book again.</p>;

  return (
    <div style={{ textAlign: 'center', padding: '20px', color:"grey"}}>
      <h2 style={{ color: ' 	#fdfcfdff', fontFamily: 'Playfair Display Black' }}>Seat Booked Successfully!</h2>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default BookingSuccess;
