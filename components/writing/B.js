import React from "react";

const B = ({ children }) => (
  <span>
    {children}

    <style jsx>{`
      span {
        font-weight: bold;
      }
    `}</style>
  </span>
);

export default B;
