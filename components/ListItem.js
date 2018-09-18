import React, { Component } from "react";
import Link from "next/link";
import Tag from "./Tag";

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
        <style jsx>{`
          .highlight {
            color: #039be5;
            font-weight: bold;
          }
        `}</style>
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
      <Link href={url} key={url}>
        <a target={showUrl ? "_blank" : "_self"}>
          <div>
            <div className="answer-title">{this.renderText(title)}</div>
            <div className="subtitle">{this.renderText(subtitle)}</div>
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
                <div className="date">
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
          <img className="answer-image" src={imageUrl} />

          <style jsx>{`
            a {
              align-items: center;
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
              padding: 10px 20px;
              text-decoration: none;
            }

            a:hover {
              background: #eee;
            }

            .answer-title {
              color: rgba(0, 0, 0, 0.84);
              font-size: 24px;
              font-weight: 600;
            }

            .subtitle {
              color: rgba(0, 0, 0, 0.54);
              font-size: 16px;
              margin-top: 2px;
            }

            .tags {
              margin-top: 12px;
            }

            .date {
              color: rgba(0, 0, 0, 0.54);
              font-size: 12px;
              margin-top: 12px;
            }

            .url {
              color: #689f38;
              font-size: 16px;
              margin-top: 15px;
            }

            .answer-image {
              margin-left: 20px;
              width: 80px;
            }

            @media screen and (max-width: 768px) {
              .answer-title {
                font-size: 18px;
              }
            }
          `}</style>
        </a>
      </Link>
    );
  }
}

export default ListItem;
