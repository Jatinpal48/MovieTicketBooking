import movies from '../data/Movies.jsx';
import MovieCard from '../components/MovieCard';


const MovieList = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: ' 	#f6f2f3ff', fontSize: '4em', fontFamily: ' layfair Display Black' }}>Movies</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          padding: '20px'
        }}
      >
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
