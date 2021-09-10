import React, { useContext } from "react";
import Movies from "./Movies";
import { MoviesContext } from "./MoviesContext";
const MoviesList = () => {
  const [movies,setMovies] = useContext(MoviesContext);
  return (
    <div>
      {/* <h1>{value}</h1> */}
      {movies.map((movies) => (
        //console.log(movies.name)
        <Movies name={movies.name} price={movies.price} id={movies.id} />
      ))}
      {console.log(movies)}
    </div>
  );
};

export default MoviesList;
