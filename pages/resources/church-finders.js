import React from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";

import CHURCH_FINDERS from "../../constants/resources/church-finders";
import { ReadingContainer, TitleSection } from "../../components/writing";
import ListItem from "../../components/ListItem";

const ChurchFinders = () => (
  <div>
    <Head
      title="Resources - Church Finders | Bible Answers"
      description="Find a solid church to attend regularly"
    />
    <Nav active="resources" />

    <TitleSection
      imageUrl="../../static/church.png"
      title="Resources - Church Finders"
      subtitle="Find a solid church to attend regularly"
    />
    <ReadingContainer marginTop={50}>
      {CHURCH_FINDERS.map(resource => {
        return <ListItem key={resource.url} showUrl {...resource} />;
      })}
    </ReadingContainer>

    <style jsx>{``}</style>
  </div>
);

export default ChurchFinders;
