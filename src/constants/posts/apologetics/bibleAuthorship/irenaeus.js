import { textRef, renderRefs } from "../../../../utils/writing";

const references = {
  1: "Irenaeus, <em>Adversus Haereses</em> (Book 3, Chapter 1)"
};

const content = `
  <div class="writing">
    <h3>Who was Irenaeus?</h3>

    <p class="first">Irenaeus was the bishop of Lyon and helped develop Christian theology by battling heresy and defending orthodoxy. He died about 202 A.D. and he heard the preaching of Polycarp, who is known to have heard John directly. This paces Irenaeus extremely close to the original sources of the gospels.</p>

    <p>Irenaeus's writing contains the first mention of all four of the gospel authors together in one place.</p>

    <h3>What does Irenaeus write about gospel authorship?</h3>

    <p class="first">Here is the relevant passage from Irenaeus's writings:</p>

    <blockquote>For, after our Lord rose from the dead, [the apostles] were invested with power from on high when the Holy Spirit came down [upon them], were filled from all [His gifts], and had perfect knowledge: they departed to the ends of the earth, preaching the glad tidings of the good things [sent] from God to us, and proclaiming the peace of heaven to men, who indeed do all equally and individually possess the Gospel of God. Matthew also issued a written Gospel among the Hebrews in their own dialect, while Peter and Paul were preaching at Rome, and laying the foundations of the Church. After their departure, Mark, the disciple and interpreter of Peter, did also hand down to us in writing what had been preached by Peter. Luke also, the companion of Paul, recorded in a book the Gospel preached by him. Afterwards, John, the disciple of the Lord, who also had leaned upon His breast, did himself publish a Gospel during his residence at Ephesus in Asia.${textRef(
      1
    )}</blockquote>

    <p>More specifically, here is what Irenaeus writes specifically concerning each of the four gospels:</p>

    <h4>Matthew</h4>

    <blockquote class="first">Matthew also issued a written Gospel among the Hebrews in their own dialect, while Peter and Paul were preaching at Rome, and laying the foundations of the Church.</blockquote>

    <p>This passage matches with what Papias writes concerning Matthew. It is likely that the gospel of Matthew was originally written by Matthew in Hebrew, and then later translated into Greek, either by Matthew himself or by someone else.</p>

    <h4>Mark</h4>

    <blockquote class="first">After their departure, Mark, the disciple and interpreter of Peter, did also hand down to us in writing what had been preached by Peter.</blockquote>

    <p>Along with passages from Papias and Justin Martyr's writings, this passage from Irenaeus tells us that the gospel of Mark was written by Mark, who wrote what he heard from Peter, who was an eyewitness of Jesus' life.</p>

    <h4>Luke</h4>

    <blockquote class="first">Luke also, the companion of Paul, recorded in a book the Gospel preached by him.</blockquote>

    <p>In addition to this passage, there is also significant internal evidence within the Bible which points towards Luke being the author of the gospel of Luke.</p>

    <h4>John</h4>

    <blockquote class="first">Afterwards, John, the disciple of the Lord, who also had leaned upon His breast, did himself publish a Gospel during his residence at Ephesus in Asia.</blockquote>

    <p>Here, Irenaeus gives context into why John's two writings, the gospel of John and Revelation, are written later than the other gospels.</p>

    <h3>Conclusion</h3>

    <p class="first">Due to how close Irenaeus is to the original authorship of the four gospels, it is very reasonable to simply take Irenaeus at his word when he names the authors of each of the gospels.</p>

    <p>Those who want to say that the authorship of the gospels is in serious doubt must undertake logical gymnastics to explain away what Irenaeus clearly writes concerning the authorship of the gospels.</p>

    ${renderRefs(references)}
  </div>
`;

const post = {
  title: "Irenaeus and gospel authorship",
  subtitle:
    "Support for the traditional authorship of Matthew, Mark, Luke, and John",
  imageUrl: "/images/irenaeus.png",
  url: "/answers/bible/irenaeus-authorship",
  added: "9/26/18",
  tags: ["bible", "authorship", "irenaeus"],
  content
};

export default post;
