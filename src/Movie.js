import React from "react";
import propTypes from "prop-types";

function Movie({ id, summary, title, poster, genres }) {
  return (
    <div className="movies__movieContainer">
      <div className="movieContainer__image">
        <img src={poster} alt="#"></img>
      </div>
      <div className="movieContainer__infos">
        <h1>{title}</h1>
        <h2>{summary}</h2>
        <ul className="infos__genres">
          {genres &&
            genres.map((genre, key) => (
              <li className="genres__genre" key={key}>
                {genre}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movie;
