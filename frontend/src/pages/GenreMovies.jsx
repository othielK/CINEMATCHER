import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import CustomPagination from "../components/CustomPagination";
import Genres from "../components/Genres";
import useGenre from "../hooks/useGenre";

const apiKey = import.meta.env.VITE_API_KEY;

export default function GenreMovies() {
  const [page, setPage] = useState(9);
  const [numOfPages, setNumOfPages] = useState(10);
  const [genres, setGenres] = useState([]);
  const [content, setContent] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  // console.log(genres);

  const fetchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreforURL}`
      )
      .then((response) => {
        setContent(response.data.results);
        setNumOfPages(response.data.total_pages);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, [genreforURL, page]);

  return (
    <div className="genres">
      <Genres
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      {/* <h3>Movies</h3> */}
      <div className="genres_movies">
        {content &&
          content.map(
            (movie) =>
              movie.vote_average !== 0 && (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <Home key={movie.id} movie={movie} />
                </Link>
              )
          )}
      </div>
      <CustomPagination setPage={setPage} pageNumber={numOfPages} />
    </div>
  );
}
