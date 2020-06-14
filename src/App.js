import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar"

const App = () => {
  const themeHook = useState("peru");
  return (
    // Passing the whole hook through to the theme context
    // Important thing about using Context here is that app is always rendered so this state will persist beyond page navigation
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar></NavBar>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id"></Details>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
