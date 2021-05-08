import React, { useState } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  // return react.createElement("div", {id: "something-important"}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //         name: "Max",
  //         animal:"Dog",
  //         breed: "Huskey"
  //     }),
  //     React.createElement(Pet, {
  //         name: "Luna",
  //         animal:"Cat",
  //         breed: "Persian Cat"
  //     }),
  //     React.createElement(Pet, {
  //         name: "Pepper",
  //         animal:"Bird",
  //         breed: "Cockatiel"
  //     }),
  // ]);

  const themeHook = useState("darkblue");
  console.log(themeHook[0]);
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
