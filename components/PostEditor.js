import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import axios from "axios";
import Select from "react-select";
import { find } from "lodash";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import { getModifiedContent } from "../utils/writing";
import ReadingContainer from "./ReadingContainer";
import CreateTag from "./CreateTag";

const HTML_PRESS_MAPPINGS = [
  {
    key1: 17,
    key2: 72,
    addition: "<h3></h3>",
    cursorOffset: 4
  },
  {
    key1: 17,
    key2: 74,
    addition: "<h4></h4>",
    cursorOffset: 4
  },
  {
    key1: 17,
    key2: 80,
    addition: "<p></p>",
    cursorOffset: 3
  },
  {
    key1: 17,
    key2: 66,
    addition: "<blockquote></blockquote>",
    cursorOffset: 12
  },
  {
    key1: 17,
    key2: 83,
    addition: "<strong></strong>",
    cursorOffset: 8
  },
  {
    key1: 17,
    key2: 69,
    addition: "<em></em>",
    cursorOffset: 8
  },
  {
    key1: 17,
    key2: 85,
    addition: `<ul>
    <li></li>
  </ul>`,
    cursorOffset: 13
  },
  {
    key1: 17,
    key2: 79,
    addition: `<ol>
    <li></li>
  </ol>`,
    cursorOffset: 13
  },
  {
    key1: 17,
    key2: 76,
    addition: "<li></li>",
    cursorOffset: 4
  },
  {
    key1: 17,
    key2: 82,
    addition: '<p><a href="" rel="nofollow" target="_blank"></a></p>',
    cursorOffset: 12
  }
];

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.keys = {};

    this.state = {
      post: props.post,
      saving: false,
      success: false,
      error: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyPress);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.post.id && this.props.post.id) {
      this.setState({ post: this.props.post });
    }
  }

  componentWillUnmount() {
    this.props.onFetchPostsTags();

    document.removeEventListener("keydown", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyPress);
  }

  handleKeyPress = e => {
    this.keys[e.keyCode] = e.type === "keydown";

    if (this.keys[17] && this.keys[90]) {
      this.onSave();
    }

    if (this.keys[17] && this.keys[65]) {
      this.props.onSetPost(null);
    }
  };

  getMappedTags(tags) {
    if (!tags) {
      return [];
    }

    return tags.map(tag => {
      return { label: tag.title, value: tag.id };
    });
  }

  onChange = event => {
    const { post } = this.state;
    const { name, value } = event.target;

    const updatedPost = {
      ...post,
      [name]: value
    };

    if (name === "slug") {
      updatedPost.url = `/answers/${value}`;
    }

    this.setState({ post: updatedPost });
  };

  onHtmlChange = html => {
    this.setState({
      post: {
        ...this.state.post,
        html
      }
    });
  };

  onHtmlPress = e => {
    e.persist();

    const { post } = this.state;
    const index = e.target.selectionStart;

    this.keys[e.keyCode] = e.type === "keydown";

    let done = false;

    HTML_PRESS_MAPPINGS.forEach(item => {
      if (done) {
        return;
      }

      const { key1, key2, addition, cursorOffset } = item;

      if (this.keys[key1] && this.keys[key2]) {
        const newHtml = `${post.html.slice(
          0,
          index
        )}${addition}${post.html.slice(index)}`;

        this.setState(
          {
            post: {
              ...post,
              html: newHtml
            }
          },
          () => {
            setTimeout(() => {
              e.target.selectionStart = index + cursorOffset;
              e.target.selectionEnd = index + cursorOffset;
            });
          }
        );

        done = true;
      }
    });
  };

  onSelectChange = value => {
    const newTagsList = value.map(tag => {
      return find(this.props.tags, tagData => tagData.id === tag.value);
    });

    this.setState({
      post: {
        ...this.state.post,
        tags: newTagsList
      }
    });
  };

  onSelectRelatedChange = value => {
    this.setState({
      post: {
        ...this.state.post,
        mapped_related_posts_tags: value.map(tag => {
          return find(this.props.tags, tagData => tagData.id === tag.value);
        })
      }
    });
  };

  onPublishedChange = () => {
    const { post } = this.state;

    const updatedPost = {
      ...post,
      published: !post.published
    };

    this.setState({ post: updatedPost });
  };

  onSave = () => {
    const { headers, onFetchPostsTags } = this.props;
    const { post } = this.state;

    if (post.published && (!post.subtitle || !post.date_added)) {
      this.setState({ error: true });
      return;
    }

    let finalPost = {
      ...post,
      tag_ids: post.tags.map(tag => tag.id),
      related_posts_tags: post.mapped_related_posts_tags
        .map(tag => tag.id)
        .join(",")
    };
    delete finalPost.tags;

    let method = "post";
    let url = "https://bibleanswersapi.herokuapp.com/posts";

    if (post.id) {
      method = "patch";
      url = `https://bibleanswersapi.herokuapp.com/posts/${post.id}`;
    }

    this.setState({ saving: true });

    axios[method](url, finalPost, headers)
      .then(response => {
        this.setState({ success: true }, () => {
          setTimeout(() => {
            this.setState({
              saving: false,
              success: false,
              post: response.data
            });
          }, 500);
        });

        onFetchPostsTags();
      })
      .catch(() => {
        this.setState({ error: true, saving: false });
      });
  };

  deletePost = () => {
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      axios
        .delete(
          `https://bibleanswersapi.herokuapp.com/posts/${this.state.post.id}`
        )
        .then(() => {
          this.props.onFetchPostsTags().then(() => {
            this.props.history.push("/admin");
          });
        });
    }
  };

  renderSaveButtons() {
    const { error, saving, success } = this.state;

    let status = null;

    if (saving) {
      status = (
        <img
          src="https://i.imgur.com/P7fXP4s.gif"
          style={{ height: 30, width: 30 }}
        />
      );
    }

    if (success || error) {
      status = (
        <div
          style={{
            background: success ? "#43A047" : "#F44336",
            color: "#fff",
            padding: "5px 10px"
          }}
        >
          {success ? "SUCCESS!" : "ERROR!"}
        </div>
      );
    }

    return (
      <div className="admin__save-buttons">
        {status}
        <input
          type="checkbox"
          onChange={this.onPublishedChange}
          checked={this.state.post.published}
        />
        Published
        <button className="small" onClick={this.onSave}>
          Save
        </button>
      </div>
    );
  }

  renderHtml() {
    const { post } = this.state;

    const modifiedContent = getModifiedContent(post);

    return (
      <div>
        <div className="post-editor__html-container">
          <Editor
            className="post-editor__html-content"
            value={post.html || ""}
            onValueChange={this.onHtmlChange}
            onKeyDown={this.onHtmlPress}
            onKeyUp={this.onHtmlPress}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16
            }}
          />
          <div
            className="post-editor__html-content"
            dangerouslySetInnerHTML={{ __html: modifiedContent }}
            ref={htmlEl => (this.htmlEl = htmlEl)}
          />
        </div>
        {this.htmlEl && this.htmlEl.innerText.split(" ").length}
      </div>
    );
  }

  render() {
    const { headers, onSetPost, tags } = this.props;
    const { post } = this.state;
    const {
      id,
      slug,
      url,
      title,
      description,
      subtitle,
      image_url,
      image_url_small,
      references,
      date_added,
      mapped_related_posts_tags
    } = post;

    return (
      <div>
        <button onClick={() => onSetPost(null)}>Admin Home</button>
        {this.renderSaveButtons()}
        {/* <div>{JSON.stringify(post)}</div> */}
        <ReadingContainer style={{ margin: "20px auto" }}>
          <div>ID: {id}</div>
          <div>
            <strong>slug: </strong>
          </div>
          <Textarea
            onChange={this.onChange}
            name="slug"
            placeholder="slug"
            value={slug}
          />
          <div>
            <strong>url: </strong>
          </div>
          <Textarea
            onChange={this.onChange}
            name="url"
            placeholder="url"
            value={url || ""}
          />
          <div>
            <strong>title: </strong>
          </div>
          <Textarea
            onChange={this.onChange}
            name="title"
            placeholder="Title"
            value={title}
          />
          <div>
            <strong>description: </strong>
          </div>
          <Textarea
            onChange={this.onChange}
            name="description"
            placeholder="Description"
            value={description || ""}
          />
          <div>{description ? 160 - (description || "").length : null}</div>
          <div>
            <strong>tags: </strong>
          </div>
          <Select
            value={this.getMappedTags(post.tags)}
            isMulti
            name="colors"
            onChange={this.onSelectChange}
            options={this.getMappedTags(tags)}
          />
          <div>
            <strong>related_posts_tags: </strong>
          </div>
          <Select
            value={this.getMappedTags(mapped_related_posts_tags)}
            isMulti
            name="colors"
            onChange={this.onSelectRelatedChange}
            options={this.getMappedTags(tags)}
          />
          <div>
            <strong>subtitle: </strong>
          </div>
          <Textarea
            onChange={this.onChange}
            name="subtitle"
            placeholder="Subtitle"
            value={subtitle}
          />
          <div>
            <strong>date_added: </strong>
          </div>
          <Textarea
            onChange={this.onChange}
            name="date_added"
            placeholder="date_added"
            value={date_added}
          />

          <CreateTag headers={headers} />
          <div className="post-editor__images">
            <div>
              <div>
                <strong>image_url: </strong>
              </div>
              <Textarea
                onChange={this.onChange}
                name="image_url"
                placeholder="image_url"
                value={image_url || ""}
              />
              <img src={image_url} alt={title} style={{ width: 300 }} />
            </div>
            <div>
              <div>
                <strong>image_url_small: </strong>
              </div>
              <Textarea
                onChange={this.onChange}
                name="image_url_small"
                placeholder="image_url_small"
                value={image_url_small || ""}
              />
              <img src={image_url_small} alt={title} style={{ width: 80 }} />
            </div>
          </div>

          <div>
            <strong>references: </strong>
          </div>
          <Textarea
            onChange={this.onChange}
            name="references"
            placeholder="references"
            value={references || ""}
          />
        </ReadingContainer>
        {this.renderHtml()}
        <button className="small danger" onClick={this.deletePost}>
          Delete
        </button>
      </div>
    );
  }
}

export default PostEditor;
