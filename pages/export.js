import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

class Export extends Component {
  static getInitialProps = async () => {
    const res = await fetch("http://bibleanswersapi.herokuapp.com/export");
    const data = await res.json();

    return {
      posts: data.posts,
      tags: data.tags
    };
  };

  render() {
    const { posts, tags } = this.props;

    const value = `module.exports = {
      exportPathMap: function() {
        return {
          "/": { page: "/" },
          "/all-posts": { page: "/all-posts" },
          "/posts-in-progress": { page: "/posts-in-progress" },
          ${posts
            .map(
              post =>
                `"${post.url}": { page: "/post", query: { slug: "${
                  post.slug
                }" } },\n`
            )
            .concat(
              tags.map(
                (tag, index) =>
                  `"${tag.url}": { page: "/tag", query: { slug: "${
                    tag.slug
                  }" } }${index === tags.length - 1 ? "" : ","}\n`
              )
            )
            .join("")}
        };
      }
    };`;

    return (
      <div>
        {posts.length}
        <div>
          <textarea
            value={value}
            style={{ width: "100%", height: "1000px", fontSize: 16 }}
            ref={textarea => (this.textarea = textarea)}
          />
        </div>
      </div>
    );
  }
}

export default Export;
