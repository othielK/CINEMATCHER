import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Favoris from "../pages/Favoris";
import NouveautesEtPopulaires from "../pages/NouveautesEtPopulaires";
import Humeurs from "../pages/Humeurs";
import Genres from "../pages/Genres";
import SearchResult from "../pages/SearchResult";
import Recherche from "./Recherche";
import MovieDetails from "../pages/MovieDetails";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<Favoris />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/favoris" element={<Favoris />} />
      <Route path="/newandpopular" element={<NouveautesEtPopulaires />} />
      <Route path="/moods" element={<Humeurs />} />
      <Route path="/genders" element={<Genres />} />
      <Route path="/search" element={<Recherche />} />
      <Route path="/search/:userResearch" element={<SearchResult />} />
    </Routes>
  );
}
