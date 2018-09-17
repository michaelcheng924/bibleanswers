import React from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";

import {
  Heading,
  Paragraph,
  ReadingContainer,
  TitleSection
} from "../../components/writing";
import answerData from "../../constants/answers/worldview/agnosticism";

const Agnosticism = () => (
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

export default Agnosticism;
