import React from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";

import RESOURCES from "../../constants/resources";
import ListItem from "../../components/ListItem";
import { ReadingContainer, TitleSection } from "../../components/writing";

const Resources = () => (
  <div>
    <Head
      title="Resources | Bible Answers"
      description="A collection of links to websites to help you grow in your faith"
    />
    <Nav active="resources" />

    <TitleSection
      imageUrl="../../static/tools.png"
      title="Resources"
      subtitle="A collection of links to websites to help you grow in your faith"
    />
    <ReadingContainer marginTop={50}>
      {RESOURCES.map(resource => {
        return <ListItem key={resource.url} {...resource} />;
      })}
    </ReadingContainer>

    <style jsx>{``}</style>
  </div>
);

export default Resources;
