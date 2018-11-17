import React from "react";

export default ({ children, style }) => (
  <div
    style={{
      margin: "0 auto 20px",
      maxWidth: 740,
      padding: "0 20px",
      width: "calc(100% - 40px)",
      ...style
    }}
  >
    {children}
  </div>
);
