import React from "react";

const TopLinks = () => {
  return (
    <div className="top-links">
      <a href="/gospel">Gospel Summary</a>
      <a href="/statement-of-faith">Statement of Faith</a>

      <style jsx>{`
        .top-links {
          display: flex;
          justify-content: center;
          padding-top: 10px;
        }

        a {
          color: rgba(0, 0, 0, 0.54);
          margin-bottom: 10px;
          margin-right: 20px;
          text-decoration: none;
          text-transform: uppercase;
        }

        a:last-child {
          margin-right: 0;
        }
      `}</style>
    </div>
  );
};

export default TopLinks;
