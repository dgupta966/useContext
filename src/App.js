import "./App.css";
import MoviesList from "./MoviesList";
import Nav from "./Nav";
import {MoviesProvider} from "./MoviesContext";
import AddMovies from "./AddMovies";

function App() {
  return (
    <MoviesProvider>
      <div className="App">
        <Nav />
        <AddMovies />
        <MoviesList />
      </div>
    </MoviesProvider>
  );
}

export default App;
