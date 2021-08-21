import React from "react";
import { movies } from "../data";

function Movies() {
  const MoviesItem = movies.map((movie)=>{return<div key={movie.title}>
    <h1>{movie.title}</h1>
    <div>{movie.time}</div>
    <ul>{movie.genres.map((genre)=><li key={genre}>{genre}</li>)}</ul>
  </div>});
  return <div>
    <h1>Movies Page</h1>
    <div>
      {MoviesItem}
    </div>
    </div>;
}

export default Movies;
