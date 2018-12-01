import React, { Component } from "react";
import { some } from "lodash";
import styled from "styled-components";

import Search from "./Search";

const BIBLE_BOOKS = {
  Genesis: true,
  Exodus: true,
  Leviticus: true,
  Numbers: true,
  Deuteronomy: true,
  Joshua: true,
  Judges: true,
  Ruth: true,
  "1 Samuel": true,
  "2 Samuel": true,
  "1 Kings": true,
  "2 Kings": true,
  "1 Chronicles": true,
  "2 Chronicles": true,
  Ezra: true,
  Nehemiah: true,
  Esther: true,
  Job: true,
  Psalms: true,
  Proverbs: true,
  Ecclesiastes: true,
  "Song of Solomon": true,
  Isaiah: true,
  Jeremiah: true,
  Lamentations: true,
  Ezekiel: true,
  Daniel: true,
  Hosea: true,
  Joel: true,
  Amos: true,
  Obadiah: true,
  Jonah: true,
  Micah: true,
  Nahum: true,
  Habakkuk: true,
  Zephaniah: true,
  Haggai: true,
  Zechariah: true,
  Malachi: true,
  Matthew: true,
  Mark: true,
  Luke: true,
  John: true,
  Acts: true,
  Romans: true,
  "1 Corinthians": true,
  "2 Corinthians": true,
  Galatians: true,
  Ephesians: true,
  Philippians: true,
  Colossians: true,
  "1 Thessalonians": true,
  "2 Thessalonians": true,
  "1 Timothy": true,
  "2 Timothy": true,
  Titus: true,
  Philemon: true,
  Hebrews: true,
  James: true,
  "1 Peter": true,
  "2 Peter": true,
  "1 John": true,
  "2 John": true,
  "3 John": true,
  Jude: true,
  Revelation: true
};

const PostItem = styled.div`
  align-items: center;
  display: flex;
`;

const PostInfo = styled.div`
  flex-grow: 1;
  font-size: 20px;
  font-weight: bold;
`;

export default class PostsList extends Component {
  constructor(props) {
    super(props);

    this.keys = {};

    this.state = {
      showNeedsWork: false
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyPress);
  }

  onNewPostClick = () => {
    this.props.onSetPost({
      published: false,
      slug: "",
      title: "",
      description: "",
      subtitle: "",
      image_url: "",
      image_url_small: "",
      references: "",
      html: `<div class="writing">
  <h3>Initial</h3>
</div>`,
      date_added: "",
      related_posts_tags: [],
      mapped_related_posts_tags: [],
      tag_ids: [],
      tags: []
    });
  };

  handleKeyPress = e => {
    this.keys[e.keyCode] = e.type === "keydown";

    if (this.keys[17] && this.keys[78]) {
      this.setState({ showNeedsWork: !this.state.showNeedsWork });
    }
  };

  needsWork(post) {
    const errors = [];

    if (!post.published) {
      errors.push("Not published");
    }

    if (!post.tags.length) {
      errors.push("No tags");
    }

    if (!post.mapped_related_posts_tags.length) {
      errors.push("No related posts");
    }

    if (!post.description || post.description.length < 160) {
      errors.push("Needs description");
    }

    if (post.slug.indexOf(" ") !== -1) {
      errors.push("Slug has space");
    }

    return errors;
  }

  renderAll() {
    this.props.posts.sort((a, b) => {
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    return this.props.posts.map(post => {
      return (
        <PostItem key={post.id} onClick={() => this.props.onSetPost(post)}>
          <PostInfo>{post.title}</PostInfo>
          {post.image_url_small ? (
            <img src={post.image_url_small} alt={post.title} />
          ) : null}
        </PostItem>
      );
    });
  }

  renderNeedsWork() {
    const { onSetPost, posts, postsBySlug, tags } = this.props;

    return (
      <div>
        {/* {posts.map(post => {
          if (post.tags.length) {
            return null;
          }

          return (
            <div key={post.id} onClick={() => onSetPost(post)}>
              <div>{post.title}</div>
              <div style={{ color: "red" }}>Needs tag</div>
            </div>
          );
        })} */}
        {tags.map(tag => {
          if (
            tag.slug === "apologetics" ||
            tag.slug === "theology" ||
            BIBLE_BOOKS[tag.title] ||
            tag.slug === "creeds-confessions"
          ) {
            return null;
          }

          return (
            <div key={tag.id} className="writing">
              {some(
                tag.post_slugs,
                slug => this.needsWork(postsBySlug[slug]).length
              ) ? (
                <div>
                  <h4 className="nomargin">{tag.title}</h4>
                  {tag.post_slugs.map(slug => {
                    const post = postsBySlug[slug];

                    const needsWork = this.needsWork(post);

                    if (!needsWork.length) {
                      return null;
                    }

                    const needsWorkErrors = needsWork.map(error => {
                      return (
                        <div key={error} style={{ color: "red" }}>
                          {error}
                        </div>
                      );
                    });

                    return (
                      <div
                        key={`${tag.slug}-
                        **${post.slug}`}
                        onClick={() => onSetPost(post)}
                      >
                        <div>{post.title}</div>
                        {needsWorkErrors}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { showNeedsWork } = this.state;
    const { posts } = this.props;

    return (
      <div>
        <h2>Posts ({posts.length})</h2>
        <button className="admin__log-out" onClick={this.onNewPostClick}>
          New Post
        </button>
        <Search showing={posts.length} total={posts.length} />
        <div className="admin__filters">
          <div className="admin__filter">
            <input
              type="checkbox"
              onChange={() => this.setState({ showNeedsWork: !showNeedsWork })}
              value={showNeedsWork}
            />
            Needs work
          </div>
        </div>
        {showNeedsWork ? this.renderNeedsWork() : this.renderAll()}
      </div>
    );
  }
}
