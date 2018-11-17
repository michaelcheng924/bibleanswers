import React, { Component, useReducer } from "react";
import axios from "axios";
import keyBy from "lodash/keyBy";

import Container from "../components/Container";
import GlobalStyle from "../components/GlobalStyle";
import AdminStyles from "../components/AdminStyles";
import Login from "../components/Login";
import AdminMain from "../components/AdminMain";
import PostEditor from "../components/PostEditor";

const Admin = () => {
  let [state, dispatch] = useReducer(
    (state, { type, payload }) => {
      switch (type) {
        case "ON_LOGIN_SUCCESS":
          return {
            ...state,
            ...payload
          };
        case "ON_FETCH_SUCCESS":
          return {
            ...state,
            ...payload
          };
        case "ON_SET_POST":
          return {
            ...state,
            ...payload
          };
        default:
          return state;
      }
    },
    {
      headers: {},
      loggedIn: false,
      post: null,
      posts: [],
      postsBySlug: {},
      tags: []
    }
  );

  const { headers, post, posts, postsBySlug, tags } = state;

  const onLoginSuccess = token => {
    onFetchPostsTags();

    localStorage.setItem("bible-answers-token", token);

    dispatch({
      type: "ON_LOGIN_SUCCESS",
      payload: {
        headers: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
        loggedIn: true
      }
    });
  };

  const onFetchPostsTags = () => {
    return axios
      .get("https://bibleanswersapi.herokuapp.com/initialfetch")
      .then(response => {
        const postsBySlug = keyBy(response.data.posts, "slug");

        const localStoragePost = localStorage.getItem("bible-answers-post");

        const post = localStoragePost ? postsBySlug[localStoragePost] : null;

        dispatch({
          type: "ON_FETCH_SUCCESS",
          payload: {
            post,
            postsBySlug,
            posts: response.data.posts,
            tags: response.data.tags
          }
        });
      });
  };

  const onSetPost = post => {
    if (post) {
      localStorage.setItem("bible-answers-post", post.slug);
    } else {
      localStorage.setItem("bible-answers-post", null);
    }

    dispatch({
      type: "ON_SET_POST",
      payload: { post }
    });
  };

  if (!state.loggedIn) {
    return <Login onLoginSuccess={onLoginSuccess} />;
  }

  return (
    <Container>
      <GlobalStyle />
      <AdminStyles />
      {post ? (
        <PostEditor
          headers={headers}
          onFetchPostsTags={onFetchPostsTags}
          onSetPost={onSetPost}
          post={post}
          tags={tags}
        />
      ) : (
        <AdminMain
          headers={headers}
          onFetchPostsTags={onFetchPostsTags}
          onSetPost={onSetPost}
          posts={posts}
          postsBySlug={postsBySlug}
          tags={tags}
        />
      )}
    </Container>
  );
};

export default Admin;
