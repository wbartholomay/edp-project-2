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
        <div>
          <u1>
            <Link to="/">Home</Link>
          </u1>
        </div>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/characters/:id" element={<CharacterWrapper />} />
          <Route path="/films/:id" element={<FilmWrapper />} />
          <Route path="/planets/:id" element={<PlanetWrapper />} />
        </Routes>
      </Router>
    </>
  );
}

function CharacterWrapper() {
  const { id } = useParams();
  return <Character id={id} />;
}

function FilmWrapper() {
  const { id } = useParams();
  return <Film id={id} />;
}

function PlanetWrapper() {
  const { id } = useParams();
  return <Planet id={id} />;
}

export default App;
