import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";

import ANSWERS from "../constants/answers";
import { ReadingContainer } from "../components/writing";
import ListItem from "../components/ListItem";

const Home = () => (
  <div>
    <Head
      title="Bible Answers - Explaining and Defending the Bible"
      description="Reformed apologetics and theologry. Answers to questions about the Bible."
    />
    <Nav />

    <ReadingContainer padding={0}>
      {ANSWERS.map(pageData => {
        return <ListItem key={pageData.url} {...pageData} />;
      })}
    </ReadingContainer>

    <style jsx>{``}</style>
  </div>
);

export default Home;
