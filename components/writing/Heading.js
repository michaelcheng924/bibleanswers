import React from "react";

const Heading = ({ children }) => (
  <h3>
    {children}

    <style jsx>{`
      h3 {
        color: rgba(0, 0, 0, 0.84);
        font-size: 34px;
        line-height: 1.15;
        margin: 0;
        margin-top: 56px;
      }

      @media screen and (max-width: 768px) {
        h3 {
          font-size: 30px;
          margin-top: 28px;
        }
      }
    `}</style>
  </h3>
);

export default Heading;
