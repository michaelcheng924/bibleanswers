import React, { Component } from "react";
import "./styles.css";

class Admin extends Component {
  state = {
    post: null,
    posts: [],
    showCreate: false,
    showPosts: true
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch("/api/posts")
      .then(r => r.json())
      .then(json => {
        this.setState({ posts: json.posts });
      });
  };

  showEdit = () => {
    this.setState({
      showEdit: true
    });
  };

  createPost = event => {
    event.preventDefault();

    fetch("/api/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uid: this.uid.value,
        title: this.title.value,
        subtitle: this.subtitle.value,
        imageUrl: this.imageUrl.value,
        imagePosition: this.imagePosition.value,
        tags: [this.tag.value],
        url: this.url.value,
        added: this.added.value,
        content: this.content.value
      })
    })
      .then(this.getPosts)
      .then(() =>
        this.setState({
          showCreate: false,
          showPosts: true
        })
      );
  };

  editPost = event => {
    event.preventDefault();

    fetch(`/api/posts/${this.state.post._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uid: this.uid.value,
        title: this.title.value,
        subtitle: this.subtitle.value,
        imageUrl: this.imageUrl.value,
        imagePosition: this.imagePosition.value,
        tags: [this.tag.value],
        url: this.url.value,
        added: this.added.value,
        content: this.content.value
      })
    })
      .then(this.getPosts)
      .then(() =>
        this.setState({
          post: null,
          showEdit: false,
          showPosts: true
        })
      );
  };

  deletePost = () => {
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      fetch(`/api/post/${this.state.post._id}`, {
        method: "delete"
      })
        .then(this.getPosts())
        .then(() => this.setState({ post: null, showPosts: true }));
    }
  };

  renderPosts() {
    if (!this.state.showPosts) {
      return null;
    }

    return (
      <div>
        <button
          onClick={() => this.setState({ showPosts: false, showCreate: true })}
        >
          Create Post
        </button>
        {this.state.posts.map(post => {
          return (
            <div
              key={post.uid}
              onClick={() =>
                this.setState({
                  post,
                  showPosts: false
                })
              }
            >
              {post.title}
            </div>
          );
        })}
      </div>
    );
  }

  renderPost() {
    if (!this.state.post || this.state.showEdit) {
      return null;
    }

    const {
      uid,
      title,
      subtitle,
      imageUrl,
      imagePosition,
      tags,
      url,
      added,
      updated,
      content
    } = this.state.post;

    return (
      <div>
        <button
          onClick={() =>
            this.setState({ post: null, showPosts: true, showCreate: false })
          }
        >
          All Posts
        </button>
        <div>{uid}</div>
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{imageUrl}</div>
        <div>{imagePosition}</div>
        <div>{tags}</div>
        <div>{url}</div>
        <div>{added}</div>
        <div>{updated}</div>
        <div>{content}</div>
        <button onClick={this.showEdit}>Edit</button>
        <button onClick={this.deletePost}>Delete</button>
      </div>
    );
  }

  renderCreateForm() {
    if (!this.state.showCreate) {
      return null;
    }

    return (
      <form onSubmit={this.createPost}>
        <div>
          <input placeholder="UID" ref={uid => (this.uid = uid)} />
        </div>
        <div>
          <input placeholder="Title" ref={title => (this.title = title)} />
        </div>
        <div>
          <input
            placeholder="Subtitle"
            ref={subtitle => (this.subtitle = subtitle)}
          />
        </div>
        <div>
          <input
            placeholder="Image URL"
            ref={imageUrl => (this.imageUrl = imageUrl)}
            defaultValue="https://bibleanswers-backend.herokuapp.com/images/"
          />
        </div>
        <div>
          <input
            placeholder="Image Position"
            ref={imagePosition => (this.imagePosition = imagePosition)}
            defaultValue="79% 50%"
          />
        </div>
        <div>
          <input placeholder="URL" ref={url => (this.url = url)} />
        </div>
        <div>
          <input placeholder="Added Date" ref={added => (this.added = added)} />
        </div>
        <div>
          <input placeholder="Tag" ref={tag => (this.tag = tag)} />
        </div>
        <div>
          <textarea
            placeholder="Content"
            ref={content => (this.content = content)}
          />
        </div>
        {/* <div><input
            placeholder="Updated Date"
            ref={updated => (this.updated = updated)}
          /></div> */}
        <button>Submit</button>
      </form>
    );
  }

  renderEditForm() {
    if (!this.state.showEdit) {
      return null;
    }

    const {
      uid,
      title,
      subtitle,
      imageUrl,
      imagePosition,
      tags,
      url,
      added,
      updated,
      content
    } = this.state.post;

    return (
      <form onSubmit={this.editPost}>
        <div>
          <input
            placeholder="UID"
            ref={uid => (this.uid = uid)}
            defaultValue={uid}
          />
        </div>
        <div>
          <input
            placeholder="Title"
            ref={title => (this.title = title)}
            defaultValue={title}
          />
        </div>
        <div>
          <input
            placeholder="Subtitle"
            ref={subtitle => (this.subtitle = subtitle)}
            defaultValue={subtitle}
          />
        </div>
        <div>
          <input
            placeholder="Image URL"
            ref={imageUrl => (this.imageUrl = imageUrl)}
            defaultValue={imageUrl}
          />
        </div>
        <div>
          <input
            placeholder="Image Position"
            ref={imagePosition => (this.imagePosition = imagePosition)}
            defaultValue={imagePosition}
          />
        </div>
        <div>
          <input
            placeholder="URL"
            ref={url => (this.url = url)}
            defaultValue={url}
          />
        </div>
        <div>
          <input
            placeholder="Added Date"
            ref={added => (this.added = added)}
            defaultValue={added}
          />
        </div>
        <div>
          <input
            placeholder="Updated Date"
            ref={updated => (this.updated = updated)}
            defaultValue={updated}
          />
        </div>
        <div>
          <input
            placeholder="Tag"
            ref={tag => (this.tag = tag)}
            defaultValue={tags[0]}
          />
        </div>
        <div>
          <textarea
            placeholder="Content"
            ref={content => (this.content = content)}
            defaultValue={content}
          />
        </div>
        <button>Edit</button>
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
        {this.renderPost()}
        {this.renderCreateForm()}
        {this.renderEditForm()}
      </div>
    );
  }
}

export default Admin;
