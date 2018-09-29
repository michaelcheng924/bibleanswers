import React from "react";

const ReadingContainer = ({ children, style }) => (
  <div className="reading-container" style={style}>
    {children}
  </div>
);

export default ReadingContainer;
