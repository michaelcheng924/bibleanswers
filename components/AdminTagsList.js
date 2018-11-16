import React, { Component } from "react";

import CreateTag from "./CreateTag";

export default class TagsList extends Component {
  render() {
    return (
      <div>
        <h2>Tags</h2>
        <CreateTag headers={this.props.headers} />
        <ul>
          {this.props.tags.map(tag => {
            return (
              <li key={tag.id} className="admin__list-post">
                <div>
                  <div>
                    {tag.title} ({tag.post_slugs.length})
                  </div>
                  {tag.description.length < 160 ? (
                    <div style={{ color: "red" }}>Needs description</div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
