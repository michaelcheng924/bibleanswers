import "./App.css";
import React, { Component } from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import { keyBy } from "lodash";

import { getStructuredPosts } from "./utils/posts";
import { getTitleMapping, getTitle } from "./constants/pages";
import Nav from "./components/Nav";
import Home from "./components/Pages/Home";
import Resources from "./components/Pages/Resources";
import Learn from "./components/Pages/Resources/Learn";
import ChurchFinders from "./components/Pages/Resources/ChurchFinders";
import About from "./components/Pages/About";
import Gospel from "./components/Pages/Gospel";
import { Page } from "./components/Writing";
import NoMatch from "./components/Pages/NoMatch";

class App extends Component {
  constructor(props) {
    super(props);

    props.posts.sort((a, b) => {
      return new Date(b.updated || b.added) - new Date(a.updated || a.added);
    });

    const postsByUrl = keyBy(props.posts, "url");

    this.state = {
      postsByUrl,
      pathname: "",
      posts: props.posts || [],
      structuredPosts: getStructuredPosts(props.posts),
      titleMapping: getTitleMapping(postsByUrl)
    };
  }

  componentDidMount() {
    this.setState({ pathname: window.location.pathname });

    this.props.history.listen(location => {
      this.setState({ pathname: location.pathname });

      const title = getTitle(this.state.titleMapping, location.pathname);

      document.title = title;
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

    return false;
  }

  renderNav() {
    const { pathname } = this.state;

    return (
      <Nav
        home={pathname !== "/" && pathname.indexOf("/categories") === -1}
        back={this.showBack()}
        pathname={pathname}
      />
    );
  }

  renderHome = ({ match }) => {
    const { posts, structuredPosts } = this.state;

    return (
      <Home match={match} posts={posts} structuredPosts={structuredPosts} />
    );
  };

  renderPage = ({ history }) => {
    const post = this.state.postsByUrl[history.location.pathname];

    return <Page post={post} />;
  };

  render() {
    return (
      <div>
        {this.renderNav()}
        <Switch>
          <Route exact path="/" render={this.renderHome} />

          <Route exact path="/resources" component={Resources} />
          <Route exact path="/resources/learn" component={Learn} />
          <Route
            exact
            path="/resources/church-finders"
            component={ChurchFinders}
          />

          <Route path="/about" component={About} />
          <Route path="/gospel" component={Gospel} />
          <Route path="/answers" render={this.renderPage} />

          <Route path="/categories/:root/:category" render={this.renderHome} />
          <Route path="/categories/:root" render={this.renderHome} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
