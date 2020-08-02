import React from "react";

class Detail extends React.Component {
  history = this.props.history;
  location = this.props.location;
  componentDidMount() {
    if (this.location.state === undefined) {
      this.history.push("/");
    }
  }
  render() {
    if (this.location.state) {
      return (
        <div>
          <h1>{this.location.state.title}</h1>
          <h2>{this.location.state.summary}</h2>
          <img src={this.location.state.poster} alt="#"></img>
          <ul>
            {this.location.state.genres.map((each) => (
              <li>{each}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
