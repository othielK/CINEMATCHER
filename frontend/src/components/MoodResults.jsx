/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { useParams } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;

export default function MoodResults() {
  const [mood, setMood] = useState([]);
  const { humeur, temps, origine } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&with_genres=${humeur}&with_original_language=${origine}&with_runtime.lte=${temps}`
      )
      .then((response) => {
        setMood(response.data.results);
        console.info(response.data);
      });
  }, []);

  return <p>coucou</p>;
}
