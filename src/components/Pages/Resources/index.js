import React from "react";

import RESOURCES from "../../../constants/resources";
import ListItem from "../../ListItem";
import { ReadingContainer, TitleSection } from "../../Writing";

const Resources = () => (
  <div>
    <TitleSection
      imageUrl="/images/tools.png"
      title="Resources"
      subtitle="A collection of links to websites to help you grow in your faith"
    />
    <ReadingContainer marginTop={50}>
      {RESOURCES.map(resource => {
        return <ListItem key={resource.url} {...resource} />;
      })}
    </ReadingContainer>
  </div>
);

export default Resources;
