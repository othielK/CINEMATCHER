/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoodCards from "../components/MoodCards";
// import MoodResults from "../components/MoodResults";

export default function Mood() {
  const [humeur, setHumeur] = useState([]);

  const onOptionChange = (e) => {
    if (e.target.value === "Heureux") {
      setHumeur(35, 10402);
    } else if (e.target.value === "Pensif") {
      setHumeur(80, 99);
    } else if (e.target.value === "Fatigué") {
      setHumeur(878, 10751);
    } else if (e.target.value === "Neutre") {
      setHumeur(18, 53);
    } else if (e.target.value === "Triste") {
      setHumeur(10749, 12);
    }
  };

  const [temps, setTemps] = useState([]);
  const onOption1Change = (e) => {
    if (e.target.value === "+ 2h10") {
      setTemps(130);
    } else if (e.target.value === "1h30") {
      setTemps(90);
    }
  };

  const [origine, setOrigine] = useState([]);
  const onOption2Change = (e) => {
    if (e.target.value === "Non") {
      setOrigine("us,fr");
    } else if (e.target.value === "Oui") {
      setOrigine("it,in,ch");
    }
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/moods/${humeur}${temps}${origine}`);
  };

  return (
    <div>
      <h1> Quelle est ton humeur ?</h1>
      <div className="cardsHumeur">
        <div className="cardHumeur">
          <input
            type="radio"
            name="humeur"
            value="Heureux"
            id="heureux"
            onChange={onOptionChange}
          />
          <label htmlFor="heureux">
            {" "}
            <img
              src="../src/assets/images/portrait_happy.png"
              alt="Heureux/se ?"
            />
            <h3>Heureux/se ?</h3>
          </label>
        </div>

        <div className="cardHumeur">
          <input
            type="radio"
            name="humeur"
            value="Pensif"
            id="pensif"
            onChange={onOptionChange}
          />
          <label htmlFor="pensif">
            {" "}
            <img
              src="../src/assets/images/portrait_pensif.png"
              alt="Pensif/ve ?"
            />
            <h3>Pensif/ve ?</h3>
          </label>
        </div>

        <div className="cardHumeur">
          <input
            type="radio"
            name="humeur"
            value="Fatigué"
            id="fatigué"
            onChange={onOptionChange}
          />
          <label htmlFor="fatigué">
            {" "}
            <img
              src="../src/assets/images/portrait_fatigue.png"
              alt="Fatigué/e ?"
            />
            <h3>Fatigué/e ?</h3>
          </label>
        </div>

        <div className="cardHumeur">
          <input
            type="radio"
            name="humeur"
            value="Neutre"
            id="neutre"
            onChange={onOptionChange}
          />
          <label htmlFor="neutre">
            {" "}
            <img
              src="../src/assets/images/portrait_neutre.png"
              alt="Neutre ?"
            />
            <h3>Neutre ?</h3>
          </label>
        </div>

        <div className="cardHumeur">
          <input
            type="radio"
            name="humeur"
            value="Triste"
            id="triste"
            onChange={onOptionChange}
          />
          <label htmlFor="triste">
            {" "}
            <img
              src="../src/assets/images/portrait_triste.png"
              alt="Triste ?"
            />
            <h3>Triste ?</h3>
          </label>
        </div>
      </div>

      <h1> Combien de temps as tu devant toi ?</h1>
      <div className="cardsTimes">
        <div className="cardTime">
          <input
            type="radio"
            name="temps"
            value="+ 2h10"
            id="time1"
            onChange={onOption1Change}
          />
          <label htmlFor="time1">
            {" "}
            <img
              src="src/assets/images/sablier2h10 karolina-grabowska.jpg"
              alt="Le temps charge"
            />{" "}
            <h3>+ 2h10</h3>
          </label>
        </div>

        <div className="cardTime">
          <input
            type="radio"
            name="temps"
            value="1h30"
            id="time2"
            onChange={onOption1Change}
          />
          <label htmlFor="time2">
            <img
              src="src/assets/images/sablier1h30karolina-grabowska.jpg"
              alt="Le temps charge"
            />{" "}
            <h3>1h30</h3>
          </label>
        </div>
      </div>

      <h1> As-tu envie d’évasion ?</h1>
      <div className="cardsEvasion">
        <div className="cardEvasion">
          <input
            type="radio"
            name="origine"
            value="Oui"
            id="oui"
            onChange={onOption2Change}
          />
          <label htmlFor="oui">
            <h3>Oui</h3>
          </label>
        </div>

        <div className="cardEvasion">
          <input
            type="radio"
            name="origine"
            value="Non"
            id="non"
            onChange={onOption2Change}
          />
          <label htmlFor="oui">
            <h3>Non</h3>
          </label>
        </div>
      </div>

      {/* <p>
        Select humeur <strong>{humeur}</strong>
      </p> */}

      <div className="Btn">
        <button onClick={() => handleSubmit()}> Générer ma sélection</button>
      </div>
      {/* {humeur.map((movie) => <MoodResults key={movie.id} movie={movie} />)} */}
      {/* {humeur.map((movie) => <p>{movie.id}</p>)} */}

      <MoodCards />
      {/* <MoodResults /> */}
    </div>
  );
}
