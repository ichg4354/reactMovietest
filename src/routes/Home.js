import React from "react";
import axios from "axios";
import Movie from "../components/Movie";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovie = async () => {
    const movieFile = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    const movies = movieFile.data.data.movies;
    this.setState({ isLoading: false, movies: movies });
  };
  renderMovie = (movie) => {
    return (
      <Movie
        title={movie.title}
        key={movie.id}
        id={movie.id}
        genres={movie.genres}
        poster={movie.medium_cover_image}
        summary={movie.synopsis}
      />
    );
  };
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const isLoading = this.state.isLoading;
    const movies = this.state.movies;
    return <div>{isLoading ? "LOADING..." : movies.map(this.renderMovie)}</div>;
  }
}

export default Home;
