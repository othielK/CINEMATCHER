/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import "../styles/Homepage.css";

const apiKey = import.meta.env.VITE_API_KEY;
export default function HomePage() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const [newMovie, setNewMovie] = useState([]);
  const [fantasyMovie, setFantasyMovie] = useState([]);
  const [adventureMovie, setAdventureMovie] = useState([]);

  const getNewMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then((response) => {
        setNewMovie(response.data.results);
      });
  };
  const getFantasyMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=comedy&include_adult=false&language=fr-FR&page=1`
      )
      .then((response) => {
        setFantasyMovie(response.data.results);
      });
  };
  const getAdventureMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=action&include_adult=false&language=fr-FR&page=1`
      )
      .then((response) => {
        setAdventureMovie(response.data.results);
      });
  };
  useEffect(() => {
    getNewMovie();
    getFantasyMovie();
    getAdventureMovie();
  }, []);
  return (
    <>
      <div className="header_nouveautés">
        <h3>Nouveautés</h3>
        <div className="cards">
          <Slider {...settings}>
            {newMovie.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Home key={movie.id} movie={movie} />
              </Link>
            ))}
          </Slider>
        </div>
      </div>

      <div className="card_comédie">
        <h3>Comédie</h3>
        <div className="cards">
          <Slider {...settings}>
            {fantasyMovie.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Home key={movie.id} movie={movie} />
              </Link>
            ))}
          </Slider>
        </div>
      </div>

      <div className="card_action">
        <h3>Action</h3>
        <div className="cards">
          <Slider {...settings}>
            {adventureMovie.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Home key={movie.id} movie={movie} />
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
