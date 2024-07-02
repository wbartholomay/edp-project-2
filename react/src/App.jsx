
import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Film from './components/Film.jsx'
import Planet from './components/Planet.jsx'
import Index from './components/Index.jsx'
import './App.css'
import Character from "./components/Characters";
import character_data from "./assets/characters.json";
// import promo_data from "./assets/promo.json";
// import Footer from "./components/Footer";
// import Search from "./components/Search";
// import Promotion from "./components/Promotion";

function App() {

  return (
    <>
      <Index/>
    </>
  );
}

export default App;
