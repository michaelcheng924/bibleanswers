import React from "react";

const OL = ({ children }) => (
  <ol>
    {children}

    <style jsx>{`
      ol {
        color: rgba(0, 0, 0, 0.84);
        font-size: 21px;
        line-height: 1.58;
        margin-top: 29px;
      }

      @media screen and (max-width: 768px) {
        ol {
          font-size: 18px;
          margin-top: 21px;
        }
      }
    `}</style>
  </ol>
);

export default OL;
