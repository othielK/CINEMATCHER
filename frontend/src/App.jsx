import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "./styles/footer.css";
import Foot from "./components/Foot";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Foot />
    </>
  );
}

export default App;
