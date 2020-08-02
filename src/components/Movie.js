import React from "react";
import proptypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(props) {
  const { title, id, genres, poster, summary } = props;
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          title,
          id,
          genres,
          poster,
          summary,
        },
      }}
    >
      <div>
        <h1>{props.title}</h1>
        <h2>{props.summary.slice(0, 180)} ...</h2>
        <img src={props.poster} alt="#"></img>
      </div>
    </Link>
  );
}
export default Movie;
