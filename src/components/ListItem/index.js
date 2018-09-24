import "./styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tag from "../Tag";

class ListItem extends Component {
  renderText(text) {
    const { search = "" } = this.props;

    const lowerSearch = search.toLowerCase();
    const lowerText = text.toLowerCase();

    const startIndex = lowerText.indexOf(lowerSearch);

    if (startIndex === -1) {
      return text;
    }

    const first = text.slice(0, startIndex);
    const highlight = text.slice(startIndex, startIndex + search.length);
    const last = text.slice(startIndex + search.length);

    return (
      <span>
        {first}
        <span className="highlight">{highlight}</span>
        {last}
      </span>
    );
  }

  render() {
    const {
      added,
      imageUrl,
      showUrl,
      subtitle,
      tags,
      title,
      updated,
      url
    } = this.props;

    return (
      <Link to={url} key={url}>
        <div className="list-item">
          <div>
            <div className="answer-title">{this.renderText(title)}</div>
            <div className="list-item__subtitle">
              {this.renderText(subtitle)}
            </div>
            {tags ? (
              <div className="tags">
                {tags.map(tag => {
                  return (
                    <Tag
                      key={tag}
                      renderedTag={this.renderText(tag)}
                      tag={tag}
                    />
                  );
                })}
                <div className="list-item__date">
                  {updated
                    ? `Updated: ${updated}`
                    : added
                      ? `Added: ${added}`
                      : null}
                </div>
              </div>
            ) : null}
            {showUrl ? <div className="url">{url}</div> : null}
          </div>
          <img className="answer-image" src={imageUrl} alt={title} />
        </div>
      </Link>
    );
  }
}

export default ListItem;
