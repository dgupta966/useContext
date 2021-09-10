import React,{ useContext } from "react";
import { MoviesContext  } from "./MoviesContext";

const Nav = () => {
    const [movies,setMovies] = useContext(MoviesContext);
    return(
        <div style={{backgroundColor:'grey', height:'100px',padding:'10px',color:'white'}}>
            <h3>Movies List</h3>
            <p>List of Movies : {movies.length}</p>
        </div>
    );
};

export default Nav;