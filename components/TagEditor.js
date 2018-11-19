import React, { Component } from "react";
import axios from "axios";
import Textarea from "react-textarea-autosize";

class UpdateTag extends Component {
  state = { ...this.props, date_added: "2018-11-19" };

  onChange = event => {
    const { name, value } = event.target;

    const newState = { [name]: value };

    if (name === "slug") {
      newState.url = `/tags/${value}`;
    }

    this.setState(newState);
  };

  updateTag = () => {
    const { id, headers, onFetchPostsTags } = this.props;

    axios
      .patch(
        `https://bibleanswersapi.herokuapp.com/tags/${id}`,
        this.state,
        headers
      )
      .then(() => {
        onFetchPostsTags();
      });
  };

  render() {
    const {
      slug,
      url,
      title,
      description,
      subtitle,
      image_url,
      date_added
    } = this.state;

    return (
      <div className="admin__create-tag">
        <button onClick={() => this.props.onSetTag(null)}>Admin home</button>
        {/* <div>{JSON.stringify(this.state)}</div> */}
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
        <div>
          <strong>date_added: </strong>
        </div>
        <Textarea
          onChange={this.onChange}
          name="date_added"
          placeholder="date_added"
          value={date_added || ""}
        />
        <div>
          <strong>image_url: </strong>
        </div>
        <Textarea
          onChange={this.onChange}
          name="image_url"
          placeholder="image_url"
          value={image_url || ""}
        />
        <img src={image_url} alt={title} style={{ width: 200 }} />
        <button onClick={this.updateTag}>Update</button>
      </div>
    );
  }
}

export default UpdateTag;
