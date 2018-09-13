import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";

import { ReadingContainer } from "../components/writing";

const About = () => (
  <div>
    <Head title="About | Bible Answers" />
    <Nav />

    <ReadingContainer marginTop={50}>
      <div className="about-heading">Welcome to Bible Answers.</div>
    </ReadingContainer>

    <style jsx>{`
      .about-heading {
        color: rgba(0, 0, 0, 0.84);
        font-size: 56px;
        font-weight: 500;
        line-height: 64px;
        margin: 0;
        margin-bottom: 16px;
      }

      @media screen and (max-width: 1199px) {
        .about-heading {
          font-size: 36px;
          font-weight: 500;
          line-height: 40px;
          margin-bottom: 8px;
        }
      }
    `}</style>
  </div>
);

export default About;
