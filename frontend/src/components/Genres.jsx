/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from "react";
import axios from "axios";
// import { Chip } from "@material-ui/core";
import PropTypes from "prop-types";
import { Chip } from "@mui/material";

const apiKey = import.meta.env.VITE_API_KEY;

export default function Genres({
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
}) {
  const fetchGenres = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        // console.log(response.data.genres);
        setGenres(response.data.genres);
      });
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleAddGenres = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  return (
    <div className="genres_test" style={{ padding: "10px 0" }}>
      <h3>Genres</h3>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ fontSize: "1em", margin: "4px" }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          onClick={() => handleAddGenres(genre)}
          clickable
          style={{ fontSize: "1em", margin: "4px" }}
          label={genre.name}
          // variant="outlined"
          color="primary"
        />
      ))}
    </div>
  );
}
Genres.propTypes = {
  genres: PropTypes.string.isRequired,
  setGenres: PropTypes.string.isRequired,
  selectedGenres: PropTypes.string.isRequired,
  setSelectedGenres: PropTypes.string.isRequired,
  setPage: PropTypes.number.isRequired,
};
