import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './Pages/MovieList';
import MovieDetails from './Pages/MovieDetails';
import BookingForm from './Pages/BookingForm';
import BookingSuccess from './Pages/BookingSuccess';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList/>} />
        <Route path="/movie/:id" element={<MovieDetails/>} />
        <Route path="/book/:id" element={<BookingForm/>} />
        <Route path="/success" element={<BookingSuccess/>} />
      </Routes>
    </Router>
  );
}

export default App;
