import React, { Component } from "react";
import axios from "axios";
import keyBy from "lodash/keyBy";

import Container from "../components/Container";
import GlobalStyle from "../components/GlobalStyle";
import AdminStyles from "../components/AdminStyles";
import Login from "../components/Login";
import AdminMain from "../components/AdminMain";
import PostEditor from "../components/PostEditor";

class Admin extends Component {
  state = {
    headers: {},
    loggedIn: false,
    post: null,
    posts: [],
    postsBySlug: {},
    tags: []
  };

  onLoginSuccess = token => {
    this.onFetchPostsTags();

    localStorage.setItem("bible-answers-token", token);

    this.setState({
      headers: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      loggedIn: true
    });
  };

  onFetchPostsTags = () => {
    return axios
      .get("http://bibleanswersapi.herokuapp.com/initialfetch")
      .then(response => {
        this.setState({
          posts: response.data.posts,
          postsBySlug: keyBy(response.data.posts, "slug"),
          tags: response.data.tags
        });
      });
  };

  onSetPost = post => {
    this.setState({ post });
  };

  render() {
    const { headers, loggedIn, post, posts, postsBySlug, tags } = this.state;

    if (!loggedIn) {
      return <Login onLoginSuccess={this.onLoginSuccess} />;
    }

    return (
      <Container>
        <GlobalStyle />
        <AdminStyles />
        {post ? (
          <PostEditor
            headers={headers}
            onFetchPostsTags={this.onFetchPostsTags}
            onSetPost={this.onSetPost}
            post={post}
            tags={tags}
          />
        ) : (
          <AdminMain
            headers={headers}
            onFetchPostsTags={this.onFetchPostsTags}
            onSetPost={this.onSetPost}
            posts={posts}
            postsBySlug={postsBySlug}
            tags={tags}
          />
        )}
      </Container>
    );
  }
}

export default Admin;
