import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Favoris from "../pages/Favoris";
import NouveautesEtPopulaires from "../pages/NouveautesEtPopulaires";
import Humeurs from "../pages/Humeurs";
import MovieDetails from "../pages/MovieDetails";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/favoris" element={<Favoris />} />
      <Route path="/newandpopular" element={<NouveautesEtPopulaires />} />
      <Route path="/humeurs" element={<Humeurs />} />
    </Routes>
  );
}
