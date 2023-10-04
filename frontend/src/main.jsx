import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Router, Link } from "react-router-dom";

import App from "./App";
// import Content from "./components/Content";

// const root = ReactDOM.createRoot(document.getElementById("root"));

export default function main() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/favoris">Favoris</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
