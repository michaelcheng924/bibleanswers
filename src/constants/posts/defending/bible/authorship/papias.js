import { textRef, renderRefs } from "../../../../../utils/writing";

const references = {
  1: "Eusebius, <em>Hist. Eccl.</em> 3.36",
  2: "Norelli, Enrico (2005). <em>Papia di Hierapolis, Esposizione degli Oracoli del Signore: I frammenti</em>. pp. 38–54. ISBN 8831527525.",
  3: 'Yarbrough, Robert W. (Jun 1983). "The Date of Papias: A Reassessment" (PDF). <em>Journal of the Evangelical Theological Society</em>. 26 (2): 181–191.',
  4: "Irenaeus, <em>Adv. Haer</em>. 5.33.4. The original Greek is preserved apud Eusebius, <em>Hist. Eccl.</em> 3.39",
  5: "Irenaeus, <em>Adversus Haereses</em> III.3",
  6: "Tertullian, <em>De praescriptione hereticorum</em> 32.2",
  7: "Eusebius, <em>Ecclesiastical History</em> 3:39"
};

const content = `
<div class="writing">
  <h3>Who is Papias?</h3>

  <p class="first">What we know about Papias comes from references in the works of Irenaeus of Lyons and Eusebius of Caesarea. From these references, we learn that Papias wrote a work called <em>Exposition of the Sayings of the Lord</em>, which is an important early source for the authorship of the gospels. Eusebius writes that Papias was Bishop of Hierapolis around the time of Ignatius of Antioch.${textRef(
    1
  )}</p>

  <h3>When did Papias live?</h3>

  <p class="first">Papias's writing is dated by most modern scholars to be about 95&ndash;120.${textRef(
    2
  )}${textRef(
  3
)} Irenaeus, who was Polycarp's disciple, describes Papias as "an ancient man who was a hearer of John and a companion of Polycarp."${textRef(
  4
)} Polycarp is said to have been a disciple of John by Irenaeus and Tertullian.${textRef(
  5
)}${textRef(6)}</p>

  <p>What all of this means is that Papias supposedly had direct contact with a man who had direct contact with John, which places Papias extremely close to the original writing of the gospels. This gives what he says about the authorship of the gospels great weight.</p>

  <h3>What does Papias write concerning gospel authorship?</h3>

  <p class="first">This passage is from Eusebius's writings. Emphasis is added.</p>

  <blockquote>[Papias, who is now mentioned by us, <strong>affirms that he received the sayings of the apostles from those who accompanied them, and he moreover asserts that he heard in person Aristion and the presbyter John</strong>. Accordingly he mentions them frequently by name, and in his writings gives their traditions. Our notice of these circumstances may not be without its use. It may also be worth while to add to the statements of Papias already given, other passages of his in which he relates some miraculous deeds, stating that he acquired the knowledge of them from tradition. The residence of the Apostle Philip with his daughters in Hierapolis has been mentioned above. We must now point out how Papias, who lived at the same time, relates that he had received a wonderful narrative from the daughters of Philip. For he relates that a dead man was raised to life in his day. He also mentions another miracle relating to Justus, surnamed Barsabas, how he swallowed a deadly poison, and received no harm, on account of the grace of the Lord. The same person, moreover, has set down other things as coming to him from unwritten tradition, amongst these some strange parables and instructions of the Saviour, and some other things of a more fabulous nature. Amongst these he says that there will be a millennium after the resurrection from the dead, when the personal reign of Christ will be established on this earth. He moreover hands down, in his own writing, other narratives given by the previously mentioned Aristion of the Lord's sayings, and the traditions of the presbyter John. For information on these points, we can merely refer our readers to the books themselves; but now, to the extracts already made, we shall add, as being a matter of primary importance, a tradition regarding Mark who wrote the Gospel, which he [Papias] has given in the following words]: And the presbyter said this. <strong>Mark having become the interpreter of Peter, wrote down accurately whatsoever he remembered. It was not, however, in exact order that he related the sayings or deeds of Christ. For he neither heard the Lord nor accompanied Him. But afterwards, as I said, he accompanied Peter, who accommodated his instructions to the necessities [of his hearers], but with no intention of giving a regular narrative of the Lord's sayings. Wherefore Mark made no mistake in thus writing some things as he remembered them. For of one thing he took especial care, not to omit anything he had heard, and not to put anything fictitious into the statements.</strong> [This is what is related by Papias regarding Mark; but with regard to Matthew he has made the following statements]: <strong>Matthew put together the oracles [of the Lord] in the Hebrew language, and each one interpreted them as best he could.</strong> [The same person uses proofs from the First Epistle of John, and from the Epistle of Peter in like manner. And he also gives another story of a woman who was accused of many sins before the Lord, which is to be found in the Gospel according to the Hebrews.]${textRef(
    7
  )}</blockquote>

  <h3>Mark wrote what he heard from Peter</h3>

  <blockquote class="first">Mark having become the interpreter of Peter, wrote down accurately whatsoever he remembered. It was not, however, in exact order that he related the sayings or deeds of Christ. For he neither heard the Lord nor accompanied Him. But afterwards, as I said, he accompanied Peter, who accommodated his instructions to the necessities [of his hearers], but with no intention of giving a regular narrative of the Lord's sayings. Wherefore Mark made no mistake in thus writing some things as he remembered them. For of one thing he took especial care, not to omit anything he had heard, and not to put anything fictitious into the statements.</blockquote>

  <p>This passage tells us that Mark recorded what he heard from Peter. This is very strong evidence that Mark is indeed the author of the book of Mark that is one of the four gospels.</p>

  <h4>Matthew wrote in the Hebrew language</h4>

  <blockquote class="first">Matthew put together the oracles [of the Lord] in the Hebrew language, and each one interpreted them as best he could.</blockquote>

  <p>Here, Papias writes that Matthew wrote "in the Hebrew language." However the book of Matthew that we have is written in Greek. There are two possible explanations for this:</p>

  <p></p>

  <ol>
    <li>Someone else translated Matthew's original work into Greek. This would still mean that Matthew is the original author of the book.</li>
    <li>Matthew perhaps also knew Greek and translated his Hebrew work into the Greek language afterwards.</li>
  </ol>

  <p>In any case, what Papias writes here is strong evidence that Matthew is indeed the original author, whether of the Hebrew original or also of the Greek translation, of the book of Matthew that is one of the four gospels.</p>

  ${renderRefs(references)}
</div>
`;

const post = {
  title: "Papias and gospel authorship",
  subtitle: "Support for the traditional authorship of Mark and Matthew",
  imageUrl: "/images/papias.png",
  imagePosition: "79% 50%",
  url: "/answers/bible/papias-authorship",
  added: "9/26/18",
  tags: ["bible", "authorship", "papias"],
  content
};

export default post;
