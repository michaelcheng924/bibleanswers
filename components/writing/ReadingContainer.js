import React from "react";

const ReadingContainer = ({
  children,
  marginBottom = 0,
  marginTop = 0,
  padding = "0 20px"
}) => (
  <div className="reading-container">
    {children}

    <style jsx>{`
      .reading-container {
        margin: 0 auto;
        max-width: 740px;
        padding: ${padding};
        margin-bottom: ${marginBottom}px;
        margin-top: ${marginTop}px;
      }
    `}</style>
  </div>
);

export default ReadingContainer;
