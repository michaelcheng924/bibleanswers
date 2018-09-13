import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";

import { ReadingContainer, TitleSection } from "../components/writing";
import gospel from "../constants/answers/gospel";

const Home = () => (
  <div>
    <Head title="What is the Gospel? | Bible Answers" />
    <Nav />

    <TitleSection {...gospel} />
    <ReadingContainer>{gospel.content}</ReadingContainer>

    <style jsx>{``}</style>
  </div>
);

export default Home;
