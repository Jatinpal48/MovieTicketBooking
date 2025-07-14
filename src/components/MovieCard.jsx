import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', transition: '0.3s', backgroundColor: '#fff' }}>
        <img
          src={movie.image}
          alt={movie.title}
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <div style={{ padding: '10px' }}>
          <h4 style={{ textAlign: 'center', fontSize: '18px',}}>{movie.title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
