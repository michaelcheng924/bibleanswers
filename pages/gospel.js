import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";

import {
  Heading,
  Paragraph,
  ReadingContainer,
  TitleSection
} from "../components/writing";
import gospel from "../constants/answers/gospel";

const Home = () => (
  <div>
    <Head
      title="What is the Gospel? | Bible Answers"
      description={gospel.subtitle}
    />
    <Nav />

    <TitleSection {...gospel} />
    <ReadingContainer marginBottom={20}>
      <Heading>Sections</Heading>
      <Paragraph first>
        <a href="#introduction" className="jump-to-section">
          1. Introduction
        </a>
        <a href="#bible" className="jump-to-section">
          2. Bible
        </a>
        <a href="#god" className="jump-to-section">
          3. God
        </a>
        <a href="#sin" className="jump-to-section">
          4. Sin
        </a>
        <a href="#jesus" className="jump-to-section">
          5. Jesus
        </a>
        <a href="#salvation" className="jump-to-section">
          6. Salvation
        </a>
        <a href="#next" className="jump-to-section">
          7. Next Steps
        </a>
      </Paragraph>
      {gospel.content}
    </ReadingContainer>

    <style jsx>{`
      .jump-to-section {
        color: #689f38;
        display: block;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Home;
