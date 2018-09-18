import React from "react";

const LI = ({ children }) => (
  <li>
    {children}{" "}
    <style jsx>{`
      li {
        margin-top: 8px;
      }
    `}</style>
  </li>
);

export default LI;
