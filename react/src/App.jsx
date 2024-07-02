import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Film from "./components/Film.jsx";
import Planet from "./components/Planet.jsx";
import Index from "./components/Index.jsx";
import "./App.css";
import Character from "./components/Characters";
import character_data from "./assets/characters.json";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
// import promo_data from "./assets/promo.json";
// import Footer from "./components/Footer";
// import Search from "./components/Search";
// import Promotion from "./components/Promotion";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route
            path="/character/:id"
            element={<Character id={useParams()} />}
          />
          <Route path="/film/:id" element={<Film id={useParams()}/>} />
          <Route path="/planet" element={<Planet />} />
        </Routes>
        <Index />
      </Router>
    </>
  );
}

export default App;
