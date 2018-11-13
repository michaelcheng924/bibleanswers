import React from "react";

export default ({ isAmp }) => (
  <nav
    style={{
      alignItems: "center",
      display: "flex",
      height: 60,
      padding: "0 20px"
    }}
  >
    {isAmp ? (
      <amp-img
        src="https://i.imgur.com/dJPxPY9.png"
        height="29"
        width="170"
        alt="Bible Answers logo"
      />
    ) : (
      <img
        src="https://i.imgur.com/dJPxPY9.png"
        alt="Bible Answers logo"
        style={{ height: 29, width: 170 }}
      />
    )}
  </nav>
);
