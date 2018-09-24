import "./App.css";
import React, { Component } from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import { get } from "lodash";

import { PAGES } from "./constants/pages";
import { getPostData } from "./constants/posts";
import Nav from "./components/Nav";
import Home from "./components/Pages/Home";
import Resources from "./components/Pages/Resources";
import Learn from "./components/Pages/Resources/Learn";
import ChurchFinders from "./components/Pages/Resources/ChurchFinders";
import About from "./components/Pages/About";
import Gospel from "./components/Pages/Gospel";
import { Page } from "./components/Writing";

class App extends Component {
  state = {
    pathname: ""
  };

  componentDidMount() {
    this.setState({ pathname: window.location.pathname });

    this.props.history.listen(location => {
      this.setState({ pathname: location.pathname });
      document.title = get(PAGES[location.pathname], "title", PAGES["/"].title);
    });
  }

  showBack() {
    let { pathname } = this.state;

    if (
      pathname.indexOf("/resources") !== -1 &&
      pathname.length > "/resources".length
    ) {
      return "/resources";
    }

    if (pathname.indexOf("/answers") !== -1) {
      return "/";
    }

    return false;
  }

  renderNav() {
    const { pathname } = this.state;

    return (
      <Nav home={pathname !== "/"} back={this.showBack()} pathname={pathname} />
    );
  }

  renderPage({ history }) {
    const post = getPostData(history.location.pathname) || {};
    return <Page post={post} />;
  }

  render() {
    return (
      <div>
        {this.renderNav()}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/resources/learn" component={Learn} />
          <Route
            exact
            path="/resources/church-finders"
            component={ChurchFinders}
          />
          <Route path="/about" component={About} />
          <Route path="/gospel" component={Gospel} />
          <Route path="/answers/:category/:topic" render={this.renderPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
