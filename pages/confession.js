import React from "react";
import Head from "next/head";
import { findIndex, isString } from "lodash";

import LONDON_BAPTIST from "../constants/confessions/london-baptist";
import { Container } from "../components/Container";
import { TitleSection } from "../components/TitleSection";
import ReadingContainer from "../components/ReadingContainer";
import ConfessionNav from "../components/ConfessionNav";
import ConfessionParagraph from "../components/ConfessionParagraph";

const Confession = ({
  chapterList,
  name,
  image_url,
  chapter,
  chapters,
  title,
  content,
  previous,
  next
}) => (
  <Container>
    <Head>
      <title>
        {chapterList ? `Chapter list for the ${name}` : `${chapter}. ${title}`}{" "}
        - ${name} | Bible Answers
      </title>

      <meta
        name="description"
        content={`This is "${chapter}. ${title}" of the ${name}. Read the ${name} while easily viewing Scripture references.`}
      />
      <meta property="og:image" content={image_url} />
    </Head>

    <TitleSection
      title={
        chapterList ? `Chapter list for the ${name}` : `${chapter}. ${title}`
      }
      subtitle={`Read and explore the ${name}`}
      image_url={image_url}
    />
    <ReadingContainer>
      <div className="writing">
        {chapterList ? null : (
          <ConfessionNav
            previous={
              previous
                ? {
                    href: `/confessions/${previous.slug}`,
                    label: `${
                      previous.chapter === "Preface" ? "" : "Chapter"
                    } ${previous.chapter}. ${previous.title}`
                  }
                : null
            }
            next={
              next
                ? {
                    href: `/confessions/${next.slug}`,
                    label: `${next.chapter === "Preface" ? "" : "Chapter"} ${
                      next.chapter
                    }. ${next.title}`
                  }
                : null
            }
          />
        )}

        {chapterList
          ? chapters.map(chapter => (
              <a key={chapter.chapter} href={`/confessions/${chapter.slug}`}>
                <p className="first">
                  {chapter.chapter}. {chapter.title}
                </p>
              </a>
            ))
          : null}

        {content
          ? content.map((paragraph, index) => {
              if (isString(paragraph)) {
                return <p key={index}>{paragraph}</p>;
              }

              return (
                <ConfessionParagraph
                  key={index}
                  paragraph={paragraph}
                  index={index}
                />
              );
            })
          : null}

        {chapterList ? null : (
          <ConfessionNav
            previous={
              previous
                ? {
                    href: `/confessions/${previous.slug}`,
                    label: `${
                      previous.chapter === "Preface" ? "" : "Chapter"
                    } ${previous.chapter}. ${previous.title}`
                  }
                : null
            }
            next={
              next
                ? {
                    href: `/confessions/${next.slug}`,
                    label: `${next.chapter === "Preface" ? "" : "Chapter"} ${
                      next.chapter
                    }. ${next.title}`
                  }
                : null
            }
          />
        )}
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
    `}</style>
  </Container>
);

Confession.getInitialProps = ({ query }) => {
  const { name, image_url, chapters } = LONDON_BAPTIST;

  if (query.slug.indexOf("chapter-list") !== -1) {
    return {
      chapterList: true,
      name,
      image_url,
      chapters
    };
  }

  const chapterIndex = findIndex(
    chapters,
    chapter => chapter.slug === query.slug
  );

  const chapter =
    chapterIndex || chapterIndex === 0 ? chapters[chapterIndex] : {};

  return {
    name: name,
    image_url: image_url,
    ...chapter,
    previous: chapters[chapterIndex - 1],
    next: chapters[chapterIndex + 1]
  };
};

export default Confession;
