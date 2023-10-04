import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Favorites from "../pages/Favorites";
import NouveautesEtPopulaires from "../pages/NouveautesEtPopulaires";
import SearchResult from "../pages/SearchResult";
import Recherche from "./Recherche";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/PageNotFound";
import GenreMovies from "../pages/GenreMovies";
import MoodResults from "./MoodResults";
import Mood from "../pages/Mood";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/newandpopular" element={<NouveautesEtPopulaires />} />
      <Route path="/genres" element={<GenreMovies />} />
      <Route path="/moods" element={<Mood />} />
      <Route path="/search" element={<Recherche />} />
      <Route path="/search/:userResearch" element={<SearchResult />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/moods/:humeur/:temps/:origine" element={<MoodResults />} />
    </Routes>
  );
}
