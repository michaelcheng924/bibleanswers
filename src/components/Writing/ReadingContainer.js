import React from "react";

const ReadingContainer = ({
  children,
  marginBottom = 0,
  marginTop = 0,
  padding = "0 20px"
}) => (
  <div
    className="reading-container"
    style={{
      marginBottom,
      marginTop,
      padding
    }}
  >
    {children}
  </div>
);

export default ReadingContainer;
