import "./styles.css";
import React from "react";

import { ReadingContainer, TitleSection } from "../../Writing";

const About = () => (
  <div>
    <TitleSection
      title="Welcome to Bible Answers"
      subtitle="Utilizing technology to explain and defend the Bible's teachings"
      imageUrl="/images/about.png"
      imagePosition="52% 70%"
    />
    <ReadingContainer style={{ marginBottom: 20 }}>
      <div className="writing">
        <h3>About Bible Answers</h3>

        <p className="first">
          Bible Answers is built and maintained by Michael Cheng, a Christian,
          husband, father, and software engineer. Two of his passions are the
          Bible and programming, and Bible Answers is a result of the
          combination of these two passions.
        </p>

        <h3>Mission</h3>

        <p className="first">
          The mission of Bible Answers is to explain and defend the Bible's
          teachings with the aid of technology.
        </p>

        <h3>Evangelism</h3>

        <p className="first">
          Bible Answers is reaching hundreds of people each day with the gospel
          through{" "}
          <a
            href="https://www.facebook.com/permalink.php?story_fbid=473522429796321&id=472739386541292&notif_id=1537987200032073&notif_t=page_post_reaction"
            target="_blank"
            rel="noopener noreferrer"
          >
            this Facebook ad
          </a>
          , which links to{" "}
          <a
            href="http://bibleanswers.io/gospel"
            target="_blank"
            rel="noopener noreferrer"
          >
            this gospel summary page
          </a>
          .
        </p>
      </div>
    </ReadingContainer>
  </div>
);

export default About;
