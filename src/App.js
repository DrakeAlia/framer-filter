import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Movie from "./Movie";

function App() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    // API key here
    const data = await fetch();
    const movies = await data.json();
    // console.log(movies);
    // saving all the results in popular
    setPopular(movies.results);
  };

  return (
    <div className="App">
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
