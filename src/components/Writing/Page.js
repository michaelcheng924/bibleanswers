import React, { Component } from "react";
import { findIndex } from "lodash";

import { ALL_POSTS } from "../../constants/posts";
import { ReadingContainer, TitleSection } from "./index";
import ListItem from "../ListItem";

class Page extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post.url !== this.props.post.url) {
      window.scrollTo(0, 0);
    }
  }

  renderBeforeContent() {
    const { beforeContent } = this.props;

    if (!beforeContent) {
      return null;
    }

    return (
      <ReadingContainer>
        <div dangerouslySetInnerHTML={{ __html: beforeContent }} />
      </ReadingContainer>
    );
  }

  renderReadMore() {
    const { post } = this.props;

    const index = findIndex(ALL_POSTS, postData => {
      return postData.url === post.url;
    });

    const posts = [];

    let upCount = 0;
    let downCount = 0;

    while (posts.length < 6) {
      if (ALL_POSTS[index + upCount + 1] && upCount <= 3) {
        upCount++;
        posts.push(ALL_POSTS[index + upCount]);
      } else if (ALL_POSTS[index - downCount - 1]) {
        downCount++;
        posts.push(ALL_POSTS[index - downCount]);
      } else if (ALL_POSTS[index + upCount + 1]) {
        upCount++;
        posts.push(ALL_POSTS[index + upCount]);
      }
    }

    return (
      <div>
        <div className="divider" style={{ marginTop: 21 }}>
          ...
        </div>
        <div className="writing" style={{ marginBottom: 21 }}>
          <h3>Read more</h3>
        </div>
        {posts.map(post => {
          return <ListItem key={post.url} {...post} />;
        })}
      </div>
    );
  }

  render() {
    const { post } = this.props;

    const { content } = post;

    return (
      <div>
        <TitleSection {...post} />

        {this.renderBeforeContent()}

        <ReadingContainer style={{ marginBottom: 20 }}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          {this.renderReadMore()}
        </ReadingContainer>
      </div>
    );
  }
}

export default Page;
