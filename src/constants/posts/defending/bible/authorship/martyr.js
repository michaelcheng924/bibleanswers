import { textRef, renderRefs } from "../../../../../utils/writing";

const references = {
  1: "Martyr, <em>Dialogue with Trypho</em> 106; ANF"
};

const content = `
  <div class="writing">
    <h3>What does Justin Martyr write about the authorship of Mark?</h3>

    <p class="first">Although Justin does not directly reference the book of Mark, reasoning based upon Justin's writing leads us to believe that Mark is indeed the author of the book of Mark. Here is what Justin writes:</p>

    <blockquote>And when it is said that He changed the name of one of the apostles to Peter; and when it is written in the memoirs of Him that this so happened, as well as that He changed the names of other two brothers, the sons of Zebedee, to Boanerges, which means sons of thunder...${textRef(
      1
    )}</blockquote>

    <p>Here, Justin refers to the "memoirs of [Peter]," and he writes that in these memoirs, it is written that Jesus "changed the name of one of the apostles to Peter" and "changed the names of other two brothers, the sons of Zebedee, to Boanerges."</p>
    
    <h3>Gospel of Peter or Gospel of Mark?</h3>

    <p class="first">In a debate with Richard Bauckham on the radio show "Unbelievable," popular New Testament critic Bart Ehrman comments concerning this passage, "he doesn't call them by our Gospels... the only memoir he names is the memoirs of Peter... he's talking about the Gospel of Peter."</p>

    <p>However, the problem with Ehrman's statement is that whereas the so-called Gospel of Peter nowhere mentions any event where Jesus changes Peter's name or changes the names of the sons of Zebedee, the Gospel of Mark <strong>does</strong> include both of these events. In fact, the Gospel of Mark is the <strong>only</strong> gospel that includes the event of Jesus changing the names of the sons of Zebedee. In Mark 3:16-17, we read:</p>

    <blockquote>He appointed the twelve: Simon (to whom he gave the name Peter); James the son of Zebedee and John the brother of James (to whom he gave the name Boanerges, that is, Sons of Thunder);</blockquote>

    <p>From this, we can conclude that Justin's reference to the "memoirs of [Peter]" is a reference to the book of the gospels that we call Mark. This matches exactly with what we know about the relationship between Peter and Mark, namely, that Mark interpreted and wrote on behalf of Peter (see <a href="/answers/bible/papias-authorship">Papias and gospel authorship</a> for what Papias writes about this).</p>

    <p>Thus, Justin's writing provides support for the traditional authorship of the gospel of Mark.</p>

    ${renderRefs(references)}
  </div>
`;

const post = {
  title: "Justin Martyr and the authorship of Mark",
  subtitle: "Support for the traditional authorship of Mark",
  imageUrl: "/images/martyr.png",
  url: "/answers/bible/justin-martyr-mark",
  added: "9/26/18",
  tags: ["bible", "authorship", "justin martyr"],
  content
};

export default post;
