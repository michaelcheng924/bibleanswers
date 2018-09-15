import {
  B,
  Heading,
  Heading2,
  Paragraph,
  Quote
} from "../../../components/writing";

const content = (
  <div>
    <Heading>Introduction</Heading>
    <Paragraph first>
      Are we saved by faith alone, or do personal works contribute to our
      salvation? The answer is that we are saved <B>by faith alone</B>, but at
      the same time,{" "}
      <B>
        true saving faith is never alone, but will always result in a
        transformed life that seeks to obey God.
      </B>{" "}
      Here, we will focus on the first part of that answer.
    </Paragraph>

    <Heading>Sinners are saved by faith alone</Heading>
    <Paragraph first>
      The Bible clearly teaches that sinners are saved by faith alone.
    </Paragraph>
    <Heading2>Ephesians 2:8-9</Heading2>
    <Quote first>
      For by grace you have been saved through faith. And this is not your own
      doing; it is the gift of God, not a result of works, so that no one may
      boast.
    </Quote>
    <Paragraph>
      In Ephesians 2:8-9, Paul says that we have been saved "through faith," and
      that this salvation "is not [our] own doing." Furthermore, the "gift of
      God" here likely refers to the entire phrase, "by grace you have been
      saved through faith," which means that the entire act of being saved is a
      gift of God. Finally, the purpose of salvation being a gift of God is "so
      that no one may boast."
    </Paragraph>
    <Paragraph>
      All of this essentially means that we contribute absolutely nothing to our
      salvation, and this includes our own faith. Even our faith is a gift from
      God. If it were not, then our faith could be used as grounds for boasting,
      since those who choose to have faith would be making a wiser decision than
      those who refuse to have faith.
    </Paragraph>

    <Heading2>Romans 3:22</Heading2>
    <Quote first>
      For by grace you have been saved through faith. And this is not your own
      doing; it is the gift of God, not a result of works, so that no one may
      boast.
    </Quote>
  </div>
);

const faithAlone = {
  title: "Does the Bible teach that we are saved by faith alone?",
  subtitle: "An explanation of the basis of salvation",
  imageUrl: "../../static/faith.png",
  imagePosition: "79% 50%",
  tags: ["salvation"],
  url: "/salvation/faith-alone",
  content
};

export default faithAlone;
