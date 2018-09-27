import React, { Component } from "react";

export default class Template extends Component {
  editPost = event => {
    event.preventDefault();

    fetch(`/api/admin/posts/${this.state.post._id}`, {
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

  render() {
    const {
      title,
      subtitle,
      imageUrl,
      imagePosition,
      url,
      added,
      updated,
      content
    } = this.props;

    return (
      <div>
        <button onClick={this.props.onBack}>Back</button>
        <form onSubmit={this.editPost}>
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
            <textarea
              placeholder="Content"
              ref={content => (this.content = content)}
              defaultValue={content}
            />
          </div>
          <button>Edit</button>
        </form>
      </div>
    );
  }
}
