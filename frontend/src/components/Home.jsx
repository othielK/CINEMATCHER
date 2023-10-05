/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from "react";
import noimage from "../assets/images/no-image.jpg";

const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
export default function Home({ movie }) {
  if (!movie) {
    return <h1>CLICK</h1>;
  }
  return (
    <div className="card_movie">
      {movie.poster_path === null ? (
        <img src={noimage} />
      ) : (
        <img src={getImage(movie.poster_path)} />
      )}
      <br />
      <h4>{movie.original_title}</h4>
      <p1>
        {Math.round(movie.vote_average * 10) / 10}
        <span>&#9733;</span>
      </p1>
    </div>
  );
}
