import React from "react";

const Paragraph = ({ children, first, noMargin }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        color: rgba(0, 0, 0, 0.84);
        font-size: 21px;
        line-height: 1.58;
        margin-top: ${first ? "8px" : noMargin ? "0" : "29px"};
      }

      @media screen and (max-width: 768px) {
        div {
          font-size: 18px;
          margin-top: ${first ? "8px" : noMargin ? "0" : "21px"};
        }
      }
    `}</style>
  </div>
);

export default Paragraph;
