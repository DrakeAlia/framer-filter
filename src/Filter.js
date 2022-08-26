import { useEffect } from "react";

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  // run this function everytime our active genre(the buttons) changes
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    // setFiltered to the filtered variable
    setFiltered(filtered);
  }, [activeGenre]);

  // 35 and 28 are the genres ids for comedy and action based on the api docs for TMDB
  return (
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
