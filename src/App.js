import React from "react";
import Axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const movieFile = await Axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    const movies = movieFile.data.data.movies;
    console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  renderMovies(movie) {
    return (
      <div className="movies">
        <Movie
          id={movie.id}
          key={movie.id}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          title={movie.title}
          genres={movie.genres}
        />
      </div>
    );
  }
  render() {
    const isLoading = this.state.isLoading;
    const movies = this.state.movies;
    return (
      <div className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__title">isLoading</span>
          </div>
        ) : (
          movies.map(this.renderMovies)
        )}
      </div>
    );
  }
}
export default App;
