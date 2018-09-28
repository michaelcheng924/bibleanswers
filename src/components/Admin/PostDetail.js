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
        <div className="writing">
          <h3>{title}</h3>
          <div className="subtitle">{subtitle}</div>
          <div>{imageUrl}</div>
          <div>{imagePosition}</div>
          <div>{url}</div>
          <div>{added}</div>
          <div>{updated}</div>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}
