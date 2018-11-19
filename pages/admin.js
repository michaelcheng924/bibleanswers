import React, { useReducer } from "react";
import axios from "axios";
import keyBy from "lodash/keyBy";

import { Container } from "../components/Container";
import { AmpGlobalStyle } from "../components/GlobalStyle";
import AdminStyles from "../components/AdminStyles";
import Login from "../components/Login";
import AdminMain from "../components/AdminMain";
import PostEditor from "../components/PostEditor";
import TagEditor from "../components/TagEditor";

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
        case "ON_SET_TAG":
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
      tag: null,
      tags: []
    }
  );

  const { headers, post, posts, postsBySlug, tag, tags } = state;

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

  const onSetTag = tag => {
    dispatch({
      type: "ON_SET_TAG",
      payload: { tag }
    });
  };

  if (!state.loggedIn) {
    return <Login onLoginSuccess={onLoginSuccess} />;
  }

  let content;

  if (post) {
    content = (
      <PostEditor
        headers={headers}
        onFetchPostsTags={onFetchPostsTags}
        onSetPost={onSetPost}
        post={post}
        tags={tags}
      />
    );
  } else if (tag) {
    content = (
      <TagEditor
        headers={headers}
        onFetchPostsTags={onFetchPostsTags}
        onSetTag={onSetTag}
        {...tag}
      />
    );
  } else if (posts.length) {
    content = (
      <AdminMain
        headers={headers}
        onFetchPostsTags={onFetchPostsTags}
        onSetPost={onSetPost}
        onSetTag={onSetTag}
        posts={posts}
        postsBySlug={postsBySlug}
        tags={tags}
      />
    );
  } else {
    content = (
      <img
        src="https://i.imgur.com/P7fXP4s.gif"
        style={{ height: 30, width: 30 }}
      />
    );
  }

  return (
    <Container>
      <title>Admin</title>
      <AmpGlobalStyle />
      <AdminStyles />
      {content}

      <style jsx>{`
        .writing h3 {
          font-size: 34px;
          line-height: 1.15;
          margin: 0;
          margin-top: 56px;
        }

        .writing h4 {
          font-size: 26px;
          line-height: 1.22;
          margin: 0;
          margin-top: 30px;
        }

        .writing h3 + p,
        .writing h3 + ol,
        .writing h3 + ul,
        .writing h3 + blockquote,
        .writing h4 + p,
        .writing h4 + ol,
        .writing h4 + ul,
        .writing h4 + blockquote {
          margin-top: 8px;
        }

        .writing p,
        .writing ol,
        .writing ul,
        .writing blockquote {
          font-size: 21px;
          line-height: 1.58;
          margin: 0;
          margin-top: 29px;
        }

        .writing ol,
        .writing ul {
          padding: 0 40px;
        }

        .writing li {
          margin-bottom: 10px;
        }

        .writing li:last-child {
          margin-bottom: 0;
        }

        .writing blockquote {
          border-left: 3px solid rgba(0, 0, 0, 0.84);
          font-style: italic;
          left: -20px;
          padding-left: 20px;
          position: relative;
        }

        .writing .first {
          margin-top: 8px;
        }

        .writing .nomargin {
          margin-top: 0;
        }

        .writing .indent {
          margin-left: 20px;
        }

        .writing .image {
          margin-top: 29px;
        }

        .writing .image-left {
          float: left;
          margin-right: 20px;
        }

        .writing .image-right {
          float: right;
          margin-left: 20px;
        }

        .writing a {
          color: #689f38;
          text-decoration: none;
        }

        .writing .scripture {
          color: #039be5;
        }

        .writing .reference {
          font-size: 14px;
          margin-left: 2px;
          position: relative;
          top: -5px;
        }

        @media screen and (max-width: 768px) {
          .writing h3 {
            font-size: 30px;
            margin-top: 28px;
          }

          .writing h4 {
            font-size: 24px;
            margin-top: 22px;
          }

          .writing p,
          .writing ol {
            font-size: 18px;
            margin-top: 21px;
          }

          .writing blockquote {
            font-size: 18px;
            margin-top: 21px;
          }

          .writing .image {
            margin-top: 21px;
          }
        }
      `}</style>
    </Container>
  );
};

export default Admin;
