import App from "./App";
import { Router } from "react-router-dom";
import React from "react";
import { hydrate } from "react-dom";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

const posts = window.__INITIAL_POSTS__;

hydrate(
  <Router history={history}>
    <App history={history} posts={posts} />
  </Router>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
