import { useEffect } from "react";
// Where the functionality of our buttons live
function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  // run this function everytime our active genre(the buttons) changes
  useEffect(() => {
    if (activeGenre === 0) {
      // setFiltered to popular basically don't do anything
      setFiltered(popular);
      // return this function
      return;
    }
    // for each individual movie when we want the following ids for genres (comdey(35) or action(28))
    // includes the active genre
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    // setFiltered to the filtered variable
    setFiltered(filtered);
  }, [activeGenre]);

  // 35 and 28 are the genres ids for comedy and action based on the api docs for TMDB
  return (
    // This will hold the three buttons for filtering
    // As well as have an active state for the different filters
    <div className="filter-container">
      <button
        // if activeGenre is 0 then add the active class to it, else don't
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
}

export default Filter;
