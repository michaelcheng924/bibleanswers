import React, { Component } from "react";
import axios from "axios";
import Textarea from "react-textarea-autosize";

class CreateTag extends Component {
  state = {
    slug: "",
    url: "",
    title: "",
    description: "",
    subtitle: ""
  };

  onChange = event => {
    const { name, value } = event.target;

    const newState = { [name]: value };

    if (name === "slug") {
      newState.url = `/tags/${value}`;
    }

    this.setState(newState);
  };

  createTag = () => {
    const { headers, onFetchPostsTags } = this.props;

    axios
      .post("http://bibleanswersapi.herokuapp.com/tags", this.state, headers)
      .then(() => {
        onFetchPostsTags();

        this.setState({
          slug: "",
          url: "",
          title: "",
          description: "",
          subtitle: ""
        });
      });
  };

  render() {
    const { slug, url, title, description, subtitle } = this.state;

    return (
      <div className="admin__create-tag">
        <div>{JSON.stringify(this.state)}</div>
        <h3>Create Tag</h3>
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
          disabled
          onChange={this.onChange}
          name="url"
          placeholder="url"
          value={url}
        />
        <div>
          <strong>title: </strong>
        </div>
        <Textarea
          onChange={this.onChange}
          name="title"
          placeholder="title"
          value={title}
        />
        <div>
          <strong>description: {160 - description.length}</strong>
        </div>
        <Textarea
          onChange={this.onChange}
          name="description"
          placeholder="description"
          value={description}
        />
        <div>
          <strong>subtitle: </strong>
        </div>
        <Textarea
          onChange={this.onChange}
          name="subtitle"
          placeholder="subtitle"
          value={subtitle}
        />
        <button onClick={this.createTag}>Create</button>
      </div>
    );
  }
}

export default CreateTag;
