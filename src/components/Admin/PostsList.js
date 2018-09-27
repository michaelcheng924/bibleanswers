import React, { Component } from "react";
import { partial } from "lodash";

export default class PostsList extends Component {
  onPostClick = post => {
    this.props.onPostClick(post);
  };

  render() {
    const { onUpdatePosts, posts } = this.props;

    return (
      <div>
        <button onClick={onUpdatePosts}>Update posts</button>
        <ol>
          {posts.map(post => {
            return (
              <li
                className="admin-post-title"
                key={post.url}
                onClick={partial(this.onPostClick, post)}
              >
                {post.title}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
