/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import "../styles/Homepage.css";
import CustomPagination from "../components/CustomPagination";

const apiKey = import.meta.env.VITE_API_KEY;
export default function NouveautesEtPopulaires() {
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
  const [popularMovie, setPopularMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(10);

  const getPopularMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`
      )
      .then((response) => {
        setPopularMovie(response.data.results);
      });
  };
  const getNewMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}`
      )
      .then((response) => {
        setNewMovie(response.data.results);
        setNumOfPages(response.data.total_pages);
      });
  };
  useEffect(() => {
    getNewMovie();
    getPopularMovie();
  }, [page]);
  return (
    <>
      <div className="card_comédie">
        <div>
          <h1>Nouveautés & Popularités</h1>
        </div>
        <h3>Popularités</h3>
        <div className="cards">
          <Slider {...settings}>
            {popularMovie.map(
              (movie) =>
                movie.vote_average !== 0 && (
                  <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <Home key={movie.id} movie={movie} />
                  </Link>
                )
            )}
          </Slider>
        </div>
      </div>

      <div className="header_nouveautés">
        <h3>Nouveautés</h3>
        <div className="cards">
          {newMovie.map(
            (movie) =>
              movie.vote_average !== 0 && (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <Home key={movie.id} movie={movie} />
                </Link>
              )
          )}
        </div>
      </div>
      <CustomPagination setPage={setPage} pageNumber={numOfPages} />
    </>
  );
}
