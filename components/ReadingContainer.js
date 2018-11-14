import React from "react";

export default ({ children, style }) => (
  <div
    style={{
      margin: "0 auto 20px",
      maxWidth: 740,
      width: "100%",
      padding: "0 20px",
      ...style
    }}
  >
    {children}
  </div>
);
