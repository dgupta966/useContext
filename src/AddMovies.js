import React, { useState, useContext } from "react";
import { MoviesContext } from "./MoviesContext";

const AddMovies = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MoviesContext);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovies = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };
  return (
    <div>
      <form onSubmit={addMovies}>
        <input type="text" name="name" value={name} onChange={updateName} placeholder="Movies" />
        <input type="text" name="price" value={price} onChange={updatePrice} placeholder = "Price" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovies;
