import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" component={Home} exact></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
    </BrowserRouter>
  );
}

export default App;
