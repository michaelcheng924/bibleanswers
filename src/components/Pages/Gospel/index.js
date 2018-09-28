import React from "react";

import "./styles.css";
import gospel from "../../../constants/posts/practical/sharing/gospel";
import { Page } from "../../Writing";

function beforeContent() {
  return `
    <div class="writing">
      <h3>Sections</h3>
      <p class="first">
        <a href="#introduction" class="jump-to-section">
          1. Introduction
        </a>
        <a href="#bible" class="jump-to-section">
          2. Bible
        </a>
        <a href="#god" class="jump-to-section">
          3. God
        </a>
        <a href="#sin" class="jump-to-section">
          4. Sin
        </a>
        <a href="#jesus" class="jump-to-section">
          5. Jesus
        </a>
        <a href="#salvation" class="jump-to-section">
          6. Salvation
        </a>
        <a href="#next" class="jump-to-section">
          7. Next Steps
        </a>
      </p>
    </div>
  `;
}

const Gospel = () => {
  return <Page post={gospel} beforeContent={beforeContent()} />;
};

export default Gospel;
