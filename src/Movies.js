import React from "react";

const Movies = ({ name, price }) => {
  return (
    <div>
      <p><strong>{name}</strong></p>
      <p>${price}</p>
    </div>
  );
};

export default Movies;
