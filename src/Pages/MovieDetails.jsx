
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/Movies.jsx';
console.log("imported movies0" , movies)

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} style={{ width: '300px' }} />
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
