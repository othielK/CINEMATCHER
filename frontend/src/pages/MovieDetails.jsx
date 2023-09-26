import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Moviedetails.css";
import noimage from "../assets/images/no-image.jpg";
import Home from "../components/Home";

const apiKey = import.meta.env.VITE_API_KEY;
const getImage = (path) => `https://image.tmdb.org/t/p/original/${path}`;

export default function MovieDetails() {
  const { id } = useParams();
  const [moviedet, setMoviedet] = useState("");
  const [castdata, setCastdata] = useState([]);
  //  const [video, setVideo] = useState([]);
  const [newMovie, setNewMovie] = useState([]);

  const getNewMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then((response) => {
        setNewMovie(response.data.results);
      });
  };

  const fetchMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        // console.log(response.data);
        setMoviedet(response.data);
      });
  };
  const fetchCast = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        // console.log(response.data);
        setCastdata(response.data.cast);
      });
  };
  useEffect(() => {
    fetchMovie();
    fetchCast();
    getNewMovie();
  }, []);

  // console.log(moviedet);
  return (
    moviedet && (
      <div className="movie">
        <div className="movieintro">
          {moviedet.backdrop_path === null ? (
            <img src={noimage} alt="" />
          ) : (
            <img src={getImage(moviedet.backdrop_path)} alt="" />
          )}
        </div>
        <div className="movie_detail">
          <div className="movie_title">
            <h1>{moviedet.original_title}</h1>
          </div>

          <div className="movie_desc">
            {Math.round(moviedet.vote_average * 10) / 10}
            <span>&#9733;</span>
            <br /> <br />
            <p>Release Date: {moviedet.release_date}</p>
            <p>Run Time: {moviedet.runtime} min</p>
          </div>

          <div className="movie_genres">
            {moviedet.genres.map((genre) => (
              <span className="movie_genre" id={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        <div className="movie_description">{moviedet.overview}</div>
        <div className="casting">
          {castdata.slice(0, 5).map((cast) => (
            <div className="castimage">
              {cast.profile_path === null ? (
                <img src={noimage} alt="" />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt=" "
                />
              )}
              <p>{cast.name}</p>
              <br />
              <p>{cast.character}</p>
            </div>
          ))}
        </div>
        <div>
          <p>Dans ce genre</p>
        </div>

        <div className="dansgenre">
          <div className="cards">
            {newMovie.slice(0, 6).map((movie) => (
              <Home key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    )
  );
}
