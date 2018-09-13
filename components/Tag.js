import React from "react";
import { FaBullhorn, FaPlus } from "react-icons/fa";

const TAG_MAPPING = {
  evangelism: {
    color: "#EF6C00",
    Icon: FaBullhorn
  },
  gospel: {
    color: "#039BE5",
    Icon: FaPlus
  }
};

const Tag = ({ tag }) => {
  const { color, Icon } = TAG_MAPPING[tag];

  return (
    <div>
      <div className="tag-name">
        <div className="tag-icon">
          <Icon />
        </div>
        {tag}
      </div>

      <style jsx>{`
        .tag-name {
          border: 1px solid ${color};
          border-radius: 14.5px;
          color: ${color};
          display: inline-flex;
          font-size: 15px;
          margin-right: 10px;
          padding: 4px 8px;
        }

        .tag-icon {
          margin-right: 4px;
        }
      `}</style>
    </div>
  );
};

export default Tag;
