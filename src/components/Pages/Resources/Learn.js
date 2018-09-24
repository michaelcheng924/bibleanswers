import React from "react";

import LEARN from "../../../constants/resources/learn";
import { ReadingContainer, TitleSection } from "../../Writing";
import ListItem from "../../ListItem";

const Learn = () => (
  <div>
    <TitleSection
      imageUrl="/images/grow.png"
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
