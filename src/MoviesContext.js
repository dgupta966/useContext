import React, { createContext, useState } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = props => {
    const [movies, setMovies] = useState([
        {
          name: "Harry Potter",
          price: 21,
          id: 1,
        },
        {
          name: "Fast 9",
          price: 222,
          id: 2,
        },
        {
          name: "Spiderman",
          price: 551,
          id: 3,
        },
      ]);
    return (
        <div>
            <MoviesContext.Provider value={[movies,setMovies]}>
                {props.children}
            </MoviesContext.Provider>
        </div>          
    );
};
