import React from "react";
import Head from "next/head";

import { Container } from "../../components/Container";
import { TitleSection } from "../../components/TitleSection";
import ReadingContainer from "../../components/ReadingContainer";
import ConfessionNav from "../../components/ConfessionNav";

const CONTENT = [
  [
    {
      superscript: 1,
      text:
        "The Holy Scripture is the only sufficient, certain, and infallible rule of all saving knowledge, faith, and obedience.",
      scriptures:
        "2 Timothy 3:15-17; Isaiah 8:20; Luke 16:29, 31; Ephesians 2:20"
    },
    {
      superscript: 2,
      text:
        "Although the light of nature, and the works of creation and providence do so far manifest the goodness, wisdom, and power of God, as to leave men inexcusable; yet are they not sufficient to give that knowledge of God and his will which is necessary unto salvation.",
      scriptures: "Romans 1:19-21; Romans 2:14-15; Psalms 19:1-3"
    },
    {
      superscript: 3,
      text:
        "Therefore it pleased the Lord at sundry times and in divers manners to reveal himself, and to declare that his will unto his church;",
      scriptures: "Hebrews 1:1"
    },
    {
      superscript: 4,
      text:
        "and afterward for the better preserving and propagating of the truth, and for the more sure establishment and comfort of the church against the corruption of the flesh, and the malice of Satan, and of the world, to commit the same wholly unto writing; which maketh the Holy Scriptures to be most necessary, those former ways of God's revealing his will unto his people being now ceased.",
      scriptures: "Proverbs 22:19-21; Romans 15:4; 2 Peter 1:19-20"
    }
  ],
  [
    {
      superscript: 5,
      text: [
        "Under the name of Holy Scripture, or the Word of God written, are now contained all the books of the Old and New Testaments, which are these:",
        "OF THE OLD TESTAMENT: Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, Ruth, I Samuel, II Samuel, I Kings, II Kings, I Chronicles, II Chronicles, Ezra, Nehemiah, Esther, Job, Psalms, Proverbs, Ecclesiastes, The Song of Solomen, Isaiah, Jeremiah, Lamentations,Ezekiel, Daniel, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi",
        "OF THE NEW TESTAMENT: Matthew, Mark, Luke, John, The Acts of the Apostles, Paul's Epistle to the Romans, I Corinthians, II Corinthians, Galatians, Ephesians, Philippians, Colossians, I Thessalonians, II Thessalonians, I Timothy, II Timothy, To Titus, To Philemon, The Epistle to the Hebrews, Epistle of James, The first and second Epistles of Peter, The first, second, and third Epistles of John, The Epistle of Jude, The Revelation",
        "All of which are given by the inspiration of God, to be the rule of faith and life."
      ],
      scriptures: "2 Timothy 3:16"
    }
  ],
  [
    {
      superscript: 6,
      text:
        "The books commonly called Apocrypha, not being of divine inspiration, are no part of the canon or rule of the Scripture, and, therefore, are of no authority to the church of God, nor to be any otherwise approved or made use of than other human writings.",
      scriptures: "Luke 24:27, 44; Romans 3:2"
    }
  ],
  [
    {
      superscript: 7,
      text:
        "The authority of the Holy Scripture, for which it ought to be believed, dependeth not upon the testimony of any man or church, but wholly upon God (who is truth itself), the author thereof; therefore it is to be received because it is the Word of God.",
      scriptures:
        "2 Peter 1:19-21; 2 Timothy 3:16; 2 Thessalonians 2:13; 1 John 5:9"
    }
  ],
  [
    {
      superscript: 8,
      text:
        "We may be moved and induced by the testimony of the church of God to an high and reverent esteem of the Holy Scriptures; and the heavenliness of the matter, the efficacy of the doctrine, and the majesty of the style, the consent of all the parts, the scope of the whole (which is to give all glory to God), the full discovery it makes of the only way of man's salvation, and many other incomparable excellencies, and entire perfections thereof, are arguments whereby it doth abundantly evidence itself to be the Word of God; yet notwithstanding, our full persuasion and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit bearing witness by and with the Word in our hearts.",
      scriptures: "John 16:13-14; 1 Corinthians 2:10-12; 1 John 2:20, 27"
    }
  ],
  [
    {
      superscript: 9,
      text:
        "The whole counsel of God concerning all things necessary for his own glory, man's salvation, faith and life, is either expressly set down or necessarily contained in the Holy Scripture: unto which nothing at any time is to be added, whether by new revelation of the Spirit, or traditions of men.",
      scriptures: "2 Timothy 3:15-17; Galatians 1:8-9"
    },
    {
      superscript: 10,
      text:
        "Nevertheless, we acknowledge the inward illumination of the Spirit of God to be necessary for the saving understanding of such things as are revealed in the Word,",
      scriptures: "John 6:45; 1 Corinthians 2:9-12"
    },
    {
      superscript: 11,
      text:
        "and that there are some circumstances concerning the worship of God, and government of the church, common to human actions and societies, which are to be ordered by the light of nature and Christian prudence, according to the general rules of the Word, which are always to be observed.",
      scriptures: "1 Corinthians 11:13-14; 1 Corinthians 14:26,40"
    }
  ],
  [
    {
      superscript: 12,
      text:
        "All things in Scripture are not alike plain in themselves, nor alike clear unto all;",
      scriptures: "2 Peter 3:16"
    },
    {
      superscript: 13,
      text:
        "yet those things which are necessary to be known, believed and observed for salvation, are so clearly propounded and opened in some place of Scripture or other, that not only the learned, but the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.",
      scriptures: "Psalms 19:7; Psalms 119:130"
    }
  ],
  [
    {
      superscript: 14,
      text:
        "The Old Testament in Hebrew (which was the native language of the people of God of old),",
      scriptures: "Romans 3:2"
    },
    {
      superscript: 15,
      text:
        "and the New Testament in Greek (which at the time of the writing of it was most generally known to the nations), being immediately inspired by God, and by his singular care and providence kept pure in all ages, are therefore authentic; so as in all controversies of religion, the church is finally to appeal to them.",
      scriptures: "Isaiah 8:20"
    },
    {
      superscript: 16,
      text:
        "But because these original tongues are not known to all the people of God, who have a right unto, and interest in the Scriptures, and are commanded in the fear of God to read,",
      scriptures: "Acts 15:15"
    },
    {
      superscript: 17,
      text: "and search them,",
      scriptures: "John 5:39"
    },
    {
      superscript: 18,
      text:
        "therefore they are to be translated into the vulgar language of every nation unto which they come,",
      scriptures: "1 Corinthians 14:6, 9, 11-12, 24, 28"
    },
    {
      superscript: 19,
      text:
        "that the Word of God dwelling plentifully in all, they may worship him in an acceptable manner, and through patience and comfort of the Scriptures may have hope.",
      scriptures: "Colossians 3:16"
    }
  ],
  [
    {
      superscript: 20,
      text:
        "The infallible rule of interpretation of Scripture is the Scripture itself; and therefore when there is a question about the true and full sense of any Scripture (which is not manifold, but one), it must be searched by other places that speak more clearly.",
      scriptures: "2 Peter 1:20-21; Acts 15:15-16"
    }
  ],
  [
    {
      superscript: 21,
      text:
        "The supreme judge, by which all controversies of religion are to be determined, and all decrees of councils, opinions of ancient writers, doctrines of men, and private spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our faith is finally resolved.",
      scriptures: "Matthew 22:29, 31-32; Ephesians 2:20; Acts 28:23"
    }
  ]
];

const LBCChapter1 = () => (
  <Container>
    <Head>
      <title>
        Chapter 1: Of God and the Holy Trinity - 1689 London Baptist Confession
        of Faith
      </title>

      <meta
        name="description"
        content="This is Chapter 1: Of God and the Holy Trinity of the 1689 London Baptist Confession of Faith, which explains the motivation and philosophy behind the writing of the 1689 London Baptist Confession of Faith."
      />
    </Head>

    <TitleSection
      title="Preface - 1689 London Baptist Confession of Faith"
      subtitle="The preface of the 1689 London Baptist Confession of Faith"
      image_url="https://i.imgur.com/FI0zkxZ.png"
    />
    <ReadingContainer>
      <div className="writing">
        <ConfessionNav
          previous={{
            href: "/confessions/1689-london-baptist-confession-preface",
            label: "Preface"
          }}
          next={{
            href:
              "/confessions/1689-london-baptist-confession-chapter-2-god-holy-trinity",
            label: "Chapter 1: Of God and the Holy Trinity"
          }}
        />

        {CONTENT.map((paragraph, index) => {
          return (
            <div key={index}>
              <h4>Chapter {index + 1}</h4>
              <p>
                {paragraph.map(section => {
                  return (
                    <span key={section.superscript}>
                      {section.text}
                      <a
                        href={`#ref-${index}-${section.superscript}`}
                        id={`${index}-${section.superscript}`}
                        className="superscript"
                      >{`${section.superscript} `}</a>
                    </span>
                  );
                })}
              </p>

              <div className="scripture-section">
                {paragraph.map(section => {
                  return (
                    <p key={section.superscript} className="nomargin">
                      <a
                        href={`#${index}-${section.superscript}`}
                        id={`ref-${index}-${section.superscript}`}
                      >
                        {`^ `}
                      </a>
                      <strong>{section.superscript}.</strong>{" "}
                      <span className="scripture">{section.scriptures}</span>
                    </p>
                  );
                })}

                <p className="first">
                  <em>Click on a Scripture above to view passage</em>
                </p>
              </div>
            </div>
          );
        })}

        <ConfessionNav
          previous={{
            href: "/confessions/1689-london-baptist-confession-preface",
            label: "Preface"
          }}
          next={{
            href:
              "/confessions/1689-london-baptist-confession-chapter-2-god-holy-trinity",
            label: "Chapter 1: Of God and the Holy Trinity"
          }}
        />
      </div>
    </ReadingContainer>

    <style jsx>{`
      .writing h3 {
        font-size: 34px;
        line-height: 1.15;
        margin: 0;
        margin-top: 56px;
      }

      .writing h4 {
        font-size: 26px;
        line-height: 1.22;
        margin: 0;
        margin-top: 30px;
      }

      .writing h3 + p,
      .writing h3 + ol,
      .writing h3 + ul,
      .writing h3 + blockquote,
      .writing h4 + p,
      .writing h4 + ol,
      .writing h4 + ul,
      .writing h4 + blockquote {
        margin-top: 8px;
      }

      .writing p,
      .writing ol,
      .writing ul,
      .writing blockquote {
        font-size: 21px;
        line-height: 1.58;
        margin: 0;
        margin-top: 29px;
      }

      .writing ol,
      .writing ul {
        padding: 0 40px;
      }

      .writing li {
        margin-bottom: 10px;
      }

      .writing li:last-child {
        margin-bottom: 0;
      }

      .writing blockquote {
        border-left: 3px solid rgba(0, 0, 0, 0.84);
        font-style: italic;
        left: -20px;
        padding-left: 20px;
        position: relative;
      }

      .writing .first {
        margin-top: 8px;
      }

      .writing .nomargin {
        margin-top: 0;
      }

      .writing .indent {
        margin-left: 20px;
      }

      .writing .image {
        margin-top: 29px;
      }

      .writing .image-left {
        float: left;
        margin-right: 20px;
      }

      .writing .image-right {
        float: right;
        margin-left: 20px;
      }

      .writing a {
        color: #689f38;
        text-decoration: none;
      }

      .writing .reference {
        font-size: 14px;
        margin-left: 2px;
        position: relative;
        top: -5px;
      }

      @media screen and (max-width: 768px) {
        .writing h3 {
          font-size: 30px;
          margin-top: 28px;
        }

        .writing h4 {
          font-size: 24px;
          margin-top: 22px;
        }

        .writing p,
        .writing ol {
          font-size: 18px;
          margin-top: 21px;
        }

        .writing blockquote {
          font-size: 18px;
          margin-top: 21px;
        }

        .writing .image {
          margin-top: 21px;
        }
      }

      .superscript {
        color: #689f38;
        font-size: 15px;
        margin-left: 1px;
        position: relative;
        top: -6px;
      }

      .scripture-section {
        border: 1px solid #bdbdbd;
        margin-top: 20px;
        padding: 5px 10px;
      }

      .scripture {
        color: #bdbdbd;
      }
    `}</style>
  </Container>
);

export default LBCChapter1;
