import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import Filter from "./Filter";

// AnimatePresence - it's going to detect the elment that's going to be removed from the DOM
// and it's going to animate it out

function App() {
  // store the fetch popular data which is going to be an array of objects
  const [popular, setPopular] = useState([]);
  // We don't want to modify popular state after we fetch it once,
  // with filter state we can use another state to play around with
  const [filtered, setFiltered] = useState([]);
  // setting to 0 because 0 will be all ids for the genres
  // active state is when we know what button is active
  const [activeGenre, setActiveGenre] = useState(0);

  // When the component gets rendered out, run fetch popular
  useEffect(() => {
    fetchPopular();
  }, []);

  // function api
  const fetchPopular = async () => {
    // API key here:
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1"
    );
    // Once we have the data we format it to json
    const movies = await data.json();
    // console.log(movies);
    // saving all the results in popular/the list of movies lives
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      {/* Our filter commponent were we are changing the state of the filter depending which button we are active on */}
      <Filter
        // orginal state
        popular={popular}
        // set state for filter
        setFiltered={setFiltered}
        // state for the active genre
        activeGenre={activeGenre}
        // set state for genre
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        {/* adding the fading in and out animation for when the movies render in */}
        <AnimatePresence>
          {/* map over each movie/item in the array */}
          {/* each item should return us a movie component */}
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
