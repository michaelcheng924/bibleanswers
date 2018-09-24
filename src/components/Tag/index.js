import "./styles.css";
import React from "react";
import { FaBook, FaBullhorn, FaTimes, FaGlobe, FaPlus } from "react-icons/fa";

export const TAG_MAPPING = {
  bible: {
    color: "#795548",
    Icon: FaBook
  },
  gospel: {
    color: "#039BE5",
    Icon: FaBullhorn
  },
  jesus: {
    color: "#757575",
    Icon: FaPlus
  },
  worldview: {
    color: "#26A69A",
    Icon: FaGlobe
  }
};

const Tag = ({ remove, renderedTag, tag }) => {
  const { color, Icon } = TAG_MAPPING[tag];

  return (
    <div>
      <div
        className="tag-name"
        style={{
          border: `1px solid ${color}`,
          color
        }}
      >
        <div className="tag-icon">
          <Icon />
        </div>
        {renderedTag || tag}
        {remove ? (
          <FaTimes className="icon-cross" style={{ marginLeft: 4 }} />
        ) : null}
      </div>
    </div>
  );
};

export default Tag;
