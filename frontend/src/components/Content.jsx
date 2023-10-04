import { Route, Routes } from "react-router-dom";
import MoodResults from "./MoodResults";
import Mood from "../pages/Mood";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Mood />} />
      <Route path="/moods/:humeur/:temps/:origine" element={<MoodResults />} />
    </Routes>
  );
}
