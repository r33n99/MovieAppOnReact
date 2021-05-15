import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movies'
const API_KEY = "db416af1-5c0d-4e2c-bbdf-710c30e93c88";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";



const App = () => {

const [ movies, setMovies] = useState([])
const [searchTerm,setSearchTerm] = useState('')


useEffect ( async () => {
  getMovies(API_URL_POPULAR)
}, [])


const getMovies = (API) => {
  fetch(API,{
    headers: {
      "X-API-KEY": API_KEY,
    },
  })
  .then(res => res.json())
  .then(data => {
    console.log(data.films)
    setMovies(data.films)
  })
}

const handleOnSubmit = (e) => {
  e.preventDefault();

  if(searchTerm) {
    getMovies(API_URL_SEARCH + searchTerm)
  setSearchTerm('');
}
}

const handleOnChange = (e) => {
setSearchTerm(e.target.value)
}
  return (
    <>
    <header className="header">
      <a className="home" href="index.html">Home</a>
    <form onSubmit={handleOnSubmit}>
    <input onChange={handleOnChange} value={searchTerm} className="search" placeholder='поиск' type="search"  />
      </form>
      </header>
    <div className="movie-container">
      {movies.map(movie => (
        <Movie key={movie.filmId} {...movie} genre={movie} />
      ))}
    </div>
    </>
  );
}

export default App;
