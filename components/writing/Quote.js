import React from "react";

const Quote = ({ children, first }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        color: rgba(0, 0, 0, 0.84);
        font-size: 21px;
        font-style: italic;
        line-height: 1.58;
        margin-top: ${first ? "8px" : "29px"};
        margin-left: 20px;
      }

      @media screen and (max-width: 768px) {
        div {
          font-size: 18px;
          margin-top: ${first ? "8px" : "21px"};
        }
      }
    `}</style>
  </div>
);

export default Quote;
