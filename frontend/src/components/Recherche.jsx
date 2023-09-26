/* eslint-disable prettier/prettier */
import "../styles/recherche.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Recherche() {

  const [userResearch, setUserResearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/search/${userResearch}`);
  };

  const handleSearch = (event) => {
    setUserResearch(event.target.value);
  };

  return (
    <form className="search_container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-box"
        placeholder="Recherchez un film/acteur"
        onChange={handleSearch}
      />
      <input type="submit" className="search-button" value="Recherche" />
      {/* <button id="search-btn" type="submit"><i class="fa fa-search" /></button> */}
    </form>
  );
}

export default Recherche;
