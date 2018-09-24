import App from "./App";
import { Router } from "react-router-dom";
import React from "react";
import { hydrate } from "react-dom";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

hydrate(
  <Router history={history}>
    <App history={history} />
  </Router>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
