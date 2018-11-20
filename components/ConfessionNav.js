import React from "react";

const ConfessionNav = ({ previous, next }) => {
  return (
    <div className="chapter-nav">
      <p className="chapter-nav-item">
        {previous ? <a href={previous.href}>{previous.label}</a> : null}
      </p>
      <p className="nomargin chapter-nav-item">
        <a href="/confessions/1689-london-baptist-confession-chapter-list">
          Table of Contents
        </a>
      </p>

      <p className="chapter-nav-item">
        {next ? <a href={next.href}>{next.label}</a> : null}
      </p>

      <style jsx>{`
        p {
          font-size: 21px;
          line-height: 1.58;
          margin: 0;
          margin-top: 29px;
        }

        a {
          color: #689f38;
          text-decoration: none;
        }

        @media screen and (max-width: 768px) {
          p {
            font-size: 18px;
            margin-top: 21px;
          }
        }

        .chapter-nav {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .chapter-nav-item {
          margin-top: 10px;
          position: relative;
          top: -10px;
          width: 33%;
        }
      `}</style>
    </div>
  );
};

export default ConfessionNav;
