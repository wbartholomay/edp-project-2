import React, { useState, useEffect } from "react";
import "../site.css";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const Index = () => {
  //data is array of character objects
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/characters");
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setData(json_response);
        console.log(json_response);
        console.log(data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchData();
  }, []);

  //   useEffect(() => {
  //     console.log("Data has been updated:", data);
  //   }, [data]); // Log whenever `data` changes

  return (
    <>
      {data && (
        <section id="charactersList">
          <>
            {data.map((character) => (
              <div>{character.name}</div>
            ))}
          </>
        </section>
      )}
    </>
  );
};

export default Index;
