import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/">
      <a className="app-name">Bible Answers</a>
    </Link>

    <div className="right-links">
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
      nav {
        align-items: center;
        display: flex;
        height: 65px;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1040px;
        padding: 0 20px;
      }
      .app-name {
        color: rgba(0, 0, 0, 0.84);
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
      }
      .right-links a {
        color: rgba(0, 0, 0, 0.54);
        font-size: 16px;
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default Nav;
