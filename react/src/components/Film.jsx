import React, { useState, useEffect } from "react";

const Film = (props) => {
  const filmId = props.filmId;
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SOCKS_API_URL}/films/${filmId}`
        );
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setData(json_response);
      } catch (error) {
        console.error("Error fetching socks:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 id="name"></h1>
      <section id="generalInfo">
        <p>
          producer: {data.producer}<span id="producer"></span>
        </p>
        <p>
          title: {data.title}<span id="title"></span>
        </p>
        <p>
          episode ID: {data.episode_id}<span id="episode_id"></span>
        </p>
        <p>
          director: {data.director}<span id="director"></span>
        </p>
        <p>
          release Date: {data.release_data}<span id="release_date"></span>
        </p>
        <p>
          opening crawl: {data.opening_crawl}<spam id="OpeningCrawl"></spam>
        </p>
      </section>
      <h2>Character List</h2>
      <section id="charactersList"></section>
      <h2>Planet</h2>
      <section id="planetList"></section>
    </>
  );
};

export default Film;
