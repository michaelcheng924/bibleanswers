import React from "react";

import CreateTag from "./CreateTag";

const TagsList = ({ headers, onSetTag, tags }) => (
  <div>
    <h2>Tags</h2>
    <CreateTag headers={headers} />
    <ul>
      {tags.map(tag => {
        return (
          <li
            key={tag.id}
            className="admin__list-post"
            onClick={() => onSetTag(tag)}
          >
            <div>
              <div>
                {tag.title} ({tag.post_slugs.length})
              </div>
              {tag.description.length < 160 ||
              tag.slug.indexOf(" ") !== -1 ||
              !tag.date_added ||
              !tag.image_url ? (
                <div style={{ color: "red" }}>Has error</div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

export default TagsList;
