import React, { useState, useEffect } from "react";
import "../site.css";

const Planet = () => {
    //data is array of character objects
  const [data, setData] = useState();
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
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchData();
  }, []);

  return(
    <>
    {data.map((character) => {
        <div>{character.name}</div>
    })}
    </>
  )}