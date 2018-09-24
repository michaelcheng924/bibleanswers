import React from "react";

import CHURCH_FINDERS from "../../../constants/resources/church-finders";
import { ReadingContainer, TitleSection } from "../../Writing";
import ListItem from "../../ListItem";

const ChurchFinders = () => (
  <div>
    <TitleSection
      imageUrl="/images/church.png"
      title="Resources - Church Finders"
      subtitle="Find a solid church to attend regularly"
    />
    <ReadingContainer marginTop={50}>
      {CHURCH_FINDERS.map(resource => {
        return <ListItem key={resource.url} showUrl {...resource} />;
      })}
    </ReadingContainer>
  </div>
);

export default ChurchFinders;
