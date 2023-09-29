// import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "../components/Home";
import "../styles/favorites.css";

const apiKey = import.meta.env.VITE_API_KEY;

export default function Favorites() {
  const removeFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter((favorite) => favorite !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    window.location.reload();
  };

  const [data, setData] = useState([]);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  useEffect(() => {
    const requests = favorites.map((id) => {
      return axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      );
    });

    Promise.all(requests).then((responses) => {
      setData(responses);
    });
  }, []);
  return (
    <div className="Mes_favs">
      {data.map((movie) => (
        <div key={movie.id}>
          <Home movie={movie.data} />
          <button type="button" onClick={() => removeFavorite(movie.id)}>
            Supprimer des favoris
          </button>
        </div>
      ))}
    </div>
  );
}
