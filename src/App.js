import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import Filter from "./Filter";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  // setting to 0 because 0 will be all ids for the genres
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    // API key here
    const data = await fetch("");
    const movies = await data.json();
    // console.log(movies);
    // saving all the results in popular
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
