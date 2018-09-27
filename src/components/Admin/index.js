import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

import { ReadingContainer } from "../Writing";
import Login from "./Login";
import PostsList from "./PostsList";
import PostDetail from "./PostDetail";

class Admin extends Component {
  state = {
    loggedIn: false,
    post: null,
    posts: [],
    showPosts: true,
    token: ""
  };

  getHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    };
  }

  getPosts = () => {
    axios.get(`/api/admin/posts`, this.getHeaders()).then(response => {
      this.setState({ posts: response.data.posts || [] });
    });
  };

  onUpdatePosts = () => {
    axios
      .post("/api/admin/updateposts", {}, this.getHeaders())
      .then(this.getPosts);
  };

  onLoginSuccess = token => {
    this.setState({ loggedIn: true, token }, () => {
      this.getPosts();
    });
  };

  onBack = () => {
    this.setState({ post: null, showCreate: false, showPosts: true });
  };

  onPostClick = post => {
    this.setState({ post, showPosts: false });
  };

  renderLogin() {
    if (this.state.loggedIn) {
      return null;
    }

    return (
      <div>
        <Login onLoginSuccess={this.onLoginSuccess} />
      </div>
    );
  }

  renderPosts() {
    const { posts, showPosts } = this.state;

    if (!showPosts) {
      return null;
    }

    return (
      <PostsList
        onUpdatePosts={this.onUpdatePosts}
        onPostClick={this.onPostClick}
        posts={posts}
      />
    );
  }

  renderPostDetail() {
    const { post } = this.state;

    if (!this.state.post) {
      return null;
    }

    return <PostDetail {...post} onBack={this.onBack} />;
  }

  render() {
    return (
      <ReadingContainer>
        {this.state.loggedIn ? (
          <div>
            {this.renderPosts()}
            {this.renderPostDetail()}
          </div>
        ) : (
          this.renderLogin()
        )}
      </ReadingContainer>
    );
  }
}

export default Admin;
