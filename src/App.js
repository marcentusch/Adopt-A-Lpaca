import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

// Instead of importing like normal we will use the lazy method to only load this when it needs to be rendered
// This way Parcel will not bundle this page together with our frontpage so we will have smaller initial load
// Rule of thumb is that it is not worth it unless you save at least 30kb on the initial load
// (That is with production package, not dev), so in this example it is not really worth it since it would be like 1kb
const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("peru");
  return (
    // Passing the whole hook through to the theme context
    // Important thing about using Context here is that app is always rendered so this state will persist beyond page navigation
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        <Suspense fallback={<h1>Loading route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
