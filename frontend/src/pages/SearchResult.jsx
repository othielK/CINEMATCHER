import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "../components/Home";

const apiKey = import.meta.env.VITE_API_KEY;

export default function SearchResult() {
  const [data, setData] = useState([]);
  const { userResearch } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${userResearch}&include_adult=false&language=en-US&page=1`
      )
      .then((response) => {
        setData(response.data.results);
      });
  }, []);

  // console.log(data);

  return (
    <>
      <h2>Resultat de la recherche pour : {userResearch}</h2>
      <div>
        {data.map((result) => (
          <Home key={result.id} movie={result} />
        ))}
      </div>
    </>
  );
}
