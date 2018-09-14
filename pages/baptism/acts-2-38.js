import React from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";

import { ReadingContainer, TitleSection } from "../../components/writing";
import answerData from "../../constants/answers/baptism/acts-2-38";

const BaptismActs238 = () => (
  <div>
    <Head
      title={`${answerData.title} | Bible Answers`}
      description={answerData.subtitle}
    />
    <Nav />

    <TitleSection {...answerData} />
    <ReadingContainer marginBottom={20}>{answerData.content}</ReadingContainer>
  </div>
);

export default BaptismActs238;
