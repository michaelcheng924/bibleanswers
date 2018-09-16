import React from "react";

const Image = ({ float = "left", height = "auto", src, width = 320 }) => (
  <div>
    <img src={src} className="image" />

    <style jsx>{`
      .image {
        float: ${float};
        height: ${height}px;
        margin-left: ${float === "right" ? "20px" : 0};
        margin-right: ${float === "left" ? "20px" : 0};
        width: ${width}px;
      }
    `}</style>
  </div>
);

export default Image;
