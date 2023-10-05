/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from "react";
import axios from "axios";
// import { Chip } from "@material-ui/core";
import PropTypes from "prop-types";
import { Chip } from "@mui/material";
import "../styles/Homepage.css";

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
    <div>
      <div className="Title_Genres">
        <h1>Genres</h1>
      </div>

      <div className="genres_test" style={{ padding: "10px 0" }}>
        {selectedGenres.map((genre) => (
          <Chip
            style={{
              fontSize: "1em",
              margin: "4px",
              backgroundColor: "#FFDE59",
              color: "#0C1117",
            }}
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
            style={{
              fontSize: "1em",
              margin: "4px",
              backgroundColor: "#0FA226",
            }}
            label={genre.name}
            color="primary"
          />
        ))}
      </div>
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
