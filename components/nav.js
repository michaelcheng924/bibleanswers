import React from "react";
import Link from "next/link";

const Nav = ({ active }) => (
  <nav>
    <Link href="/">
      <a className="app-name">
        <img src="../static/logo.png" className="logo" />
        Bible Answers
      </a>
    </Link>

    <div className="right-links">
      <Link href="/resources">
        <a style={{ fontWeight: active === "resources" ? "bold" : "inherit" }}>
          Resources
        </a>
      </Link>
      <Link href="/about">
        <a style={{ fontWeight: active === "about" ? "bold" : "inherit" }}>
          About
        </a>
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
        align-items: center;
        color: #039be5;
        display: flex;
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
      }
      .logo {
        margin-right: 10px;
      }
      .right-links a {
        color: rgba(0, 0, 0, 0.54);
        font-size: 16px;
        margin-left: 20px;
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default Nav;
