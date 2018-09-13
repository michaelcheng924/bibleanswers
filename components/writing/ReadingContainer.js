import React from "react";

const ReadingContainer = ({ children, marginTop = 0 }) => (
  <div className="reading-container">
    {children}

    <style jsx>{`
      .reading-container {
        margin: 0 auto;
        max-width: 740px;
        padding: 0 20px;
        margin-top: ${marginTop}px;
      }
    `}</style>
  </div>
);

export default ReadingContainer;
