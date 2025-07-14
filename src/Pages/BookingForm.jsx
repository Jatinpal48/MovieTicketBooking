import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const bookingId = `BOOK-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    navigate('/success', { state: { ...form, bookingId } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{color: ' 	#fafafaff', fontFamily: 'Playfair Display Black'}}>Book Your Seat</h2>
      <input name="name" placeholder="Name" required onChange={handleChange} style={{ display: 'block', marginBottom: '10px' }} />
      <input name="email" placeholder="Email" required onChange={handleChange} style={{ display: 'block', marginBottom: '10px' }} />
      <input name="mobile" placeholder="Mobile" required onChange={handleChange} style={{ display: 'block', marginBottom: '10px' }} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
