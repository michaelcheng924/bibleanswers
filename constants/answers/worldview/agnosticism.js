import {
  B,
  Heading,
  Image,
  Paragraph,
  Quote
} from "../../../components/writing";

const content = (
  <div>
    <Heading>The two types of agnosticism</Heading>
    <Paragraph first>
      There are two types of agnosticism, one of which is inherently
      self-contradictory.
      <ol>
        <li>
          <B>Truth cannot be known.</B> This position is self-contradictory.
        </li>
        <li>
          <B>I simply do not know the truth.</B> This position is not
          self-contradictory because it does not make any universal assertion.
          However, instead of being satisfied with not knowing the truth, one
          who holds this position <B>should</B> have a desire to pursue the
          truth.
        </li>
      </ol>
    </Paragraph>
    <Paragraph>
      Here, we will examine why the first position, that "Truth cannot be
      known," is an impossibly self-contradictory position.
    </Paragraph>

    <Heading>
      The assertion, "Truth cannot be known" is self-contradictory
    </Heading>
    <Paragraph>
      In short, "truth cannot be known" is a self-contradictory position because
      if truth cannot be known, then the supposed "truth," "truth cannot be
      known," <B>cannot itself be known</B>.
    </Paragraph>
    <Paragraph>
      <Image src="../../static/contradiction.png" />
      If it is true that "truth cannot be known," then it is also true that
      "truth" <B>can</B> be known, since "truth" that "truth cannot be known"
      can be known. However, if truth <B>both can and can't</B> be known at the
      same time, then truth is self-contradictory, which is impossible.
    </Paragraph>
    <Paragraph>
      If truth both can and can't be known at the same time, then any statement
      could also be both true and untrue at the same time, which is absurd. No
      statement at all would have any meaning whatsoever.
    </Paragraph>
    <Paragraph>
      The necessary conclusion to all of this is that the position, "Truth
      cannot be known," cannot be true because it is impossibly
      self-contradictory.
    </Paragraph>
  </div>
);

const agnosticism = {
  title: "Is agnosticism self-contradictory?",
  subtitle: "The fatal flaw of agnosticism",
  imageUrl: "../../static/question-marks.png",
  imagePosition: "79% 50%",
  tags: ["worldview"],
  url: "/worldview/agnosticism",
  added: "9/17/18",
  content
};

export default agnosticism;
