import React from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";

import LEARN from "../../constants/resources/learn";
import { ReadingContainer, TitleSection } from "../../components/writing";
import ListItem from "../../components/ListItem";

const Learn = () => (
  <div>
    <Head
      title="Resources - Learn | Bible Answers"
      description="Resources for learning more about the Bible"
    />
    <Nav active="resources" />

    <TitleSection
      imageUrl="../../static/grow.png"
      title="Resources - Learn"
      subtitle="Resources for learning more about the Bible"
    />
    <ReadingContainer marginTop={50}>
      {LEARN.map(resource => {
        return <ListItem key={resource.url} showUrl {...resource} />;
      })}
    </ReadingContainer>
  </div>
);

export default Learn;
