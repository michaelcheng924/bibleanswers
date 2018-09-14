import React from "react";

const Heading2 = ({ children }) => (
  <h4>
    {children}

    <style jsx>{`
      h4 {
        color: rgba(0, 0, 0, 0.84);
        font-size: 26px;
        line-height: 1.22;
        margin: 0;
        margin-top: 30px;
      }

      @media screen and (max-width: 768px) {
        h4 {
          font-size: 24px;
          margin-top: 22px;
        }
      }
    `}</style>
  </h4>
);

export default Heading2;
