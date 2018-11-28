import React, { useState } from "react";
import Head from "next/head";
import { FaChevronUp } from "react-icons/fa";
import { find, findIndex, isArray } from "lodash";

import CONTRADICTIONS from "../constants/contradictions";
import { Container } from "../components/Container";
import { TitleSection } from "../components/TitleSection";
import ReadingContainer from "../components/ReadingContainer";

function boldNumbers(text) {
  const splitText = text.split(" ");
  const mappedText = splitText.map(word => {
    if (parseInt(word) < 100) {
      return `<strong>${word}</strong>`;
    }

    return word;
  });

  return mappedText.join(" ");
}

function renderPassage(passage, index) {
  const text = isArray(passage.text) ? (
    passage.text.map((paragraph, index1) => (
      <p
        key={index1}
        className="first"
        dangerouslySetInnerHTML={{
          __html: boldNumbers(paragraph)
        }}
      />
    ))
  ) : (
    <p
      className="first"
      dangerouslySetInnerHTML={{
        __html: boldNumbers(passage.text)
      }}
    />
  );

  return (
    <div key={index}>
      <blockquote className={index === 0 ? "first" : ""}>
        <strong>{passage.passage}</strong>
        {text}
      </blockquote>
    </div>
  );
}

function renderLink({ index, book, bookVerses, count, question }) {
  return (
    <div key={index} style={{ marginTop: 6 }}>
      <a
        href={`#${book}_${bookVerses}`}
        id={`top_${book}_${bookVerses}`}
        dangerouslySetInnerHTML={{
          __html: `${count}) ${bookVerses} - ${question}`
        }}
      />
    </div>
  );
}

function renderAnswer({
  index,
  book,
  bookVerses,
  foundBookVerses,
  question,
  allPassages,
  quickAnswer,
  fullPost,
  count,
  hideDetails,
  toggleDetail
}) {
  return (
    <div key={index}>
      <a href={`#top`} style={{ display: "inline-block", marginTop: 28 }}>
        <FaChevronUp /> Top
      </a>
      <a
        href={`#${book}`}
        id={`${book}_${bookVerses}`}
        style={{ display: "inline-block", marginLeft: 20, marginTop: 28 }}
      >
        <FaChevronUp /> {book}
      </a>
      <h3
        className="nomargin"
        dangerouslySetInnerHTML={{
          __html: `${count}) ${bookVerses} - ${question}`
        }}
      />

      {foundBookVerses ? (
        <div>
          <p className="first">
            Same as{" "}
            <strong>
              {book} {foundBookVerses} - {question}
            </strong>
          </p>
          <p
            className="nomargin"
            onClick={toggleDetail}
            style={{ color: "#039BE5", fontSize: 16, cursor: "pointer" }}
          >
            {hideDetails ? `Show ` : `Hide `} answer
          </p>
        </div>
      ) : null}
      {hideDetails ? null : (
        <div>
          <h4 className="first">Quick answer</h4>
          <p>{quickAnswer}</p>
          <div>
            <p>
              <strong>
                Full post: <a href={fullPost}>{question}</a>
              </strong>
            </p>
          </div>

          <h4>Passages</h4>
          {allPassages.map((passageGroup, index) => {
            if (passageGroup.heading !== undefined) {
              return (
                <div key={index}>
                  <p className={index === 0 ? "first" : ""}>
                    <strong>{passageGroup.heading}</strong>
                  </p>
                  {passageGroup.passages.map((passage, index1) => {
                    return renderPassage(passage, index1);
                  })}
                </div>
              );
            }

            return renderPassage(passageGroup, index);
          })}
        </div>
      )}
    </div>
  );
}

const BibleContradictions = () => {
  let [details, setDetails] = useState({});

  let linkCount = 0;
  let answerCount = 0;

  const image_url = "https://i.imgur.com/faAmDhY.png";
  const description = `Explanations for every alleged "contradiction" in the Bible, including passages, quick answer, and a link to a fuller post for each alleged Bible "contradiction."`;
  const date_added = "2018-11-26";
  const updated_at = "2018-11-26";

  const numbers = CONTRADICTIONS.reduce(
    (result, book) => {
      book.answers.forEach(answer => {
        if (answer.see) {
          result.total++;
        }

        if (!answer.quickAnswer && !answer.see) {
          result.noQuickAnswer++;
        }

        if (!answer.fullPost && !answer.see) {
          result.noFullPost++;
        }
      });

      return result;
    },
    {
      total: 0,
      noQuickAnswer: 0,
      noFullPost: 0
    }
  );

  const pageTitle = `"Contradictions" in the Bible: Every alleged biblical "contradiction" explained`;

  const datePublished = new Date(date_added);

  const matthewIndex = findIndex(
    CONTRADICTIONS,
    book => book.book === "Matthew"
  );

  return (
    <Container>
      <Head>
        <title>{pageTitle} | Bible Answers</title>

        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`https://bibleanswers.io/tags/contradictions`}
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image_url} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://google.com/article"
              },
              headline: pageTitle,
              image: {
                "@type": "ImageObject",
                url: image_url,
                height: 400,
                width: 1200
              },
              datePublished: datePublished,
              dateModified: new Date(updated_at).toISOString(),
              author: {
                "@type": "Person",
                name: "Michael Cheng"
              },
              publisher: {
                "@type": "Organization",
                name: "Bible Answers",
                logo: {
                  "@type": "ImageObject",
                  url: "https://i.imgur.com/dJPxPY9.png"
                }
              },
              description: description
            })
          }}
        />
      </Head>

      <TitleSection
        title={pageTitle}
        subtitle={`Explanations for every alleged "contradiction" in the Bible`}
        image_url={image_url}
        date_added={date_added}
        user={{
          name: "Michael Cheng",
          image: "https://i.imgur.com/8aN31Dn.png"
        }}
      />

      <ReadingContainer>
        <div className="writing">
          <h3>Work in progress</h3>
          <p>
            This page is still a work in progress. Please check back to see
            updates!
          </p>

          <h3>Progress</h3>

          <p>total: {numbers.total}</p>
          <p>no quick answer: {numbers.noQuickAnswer}</p>
          <p>no full post: {numbers.noFullPost}</p>

          <h3>Introduction</h3>

          <p>
            Opponents of the Bible claim that it contains numerous
            irreconcilable contradictions. However, none of the "alleged"
            contradictions in the Bible are truly irreconcilable.
          </p>

          <p>
            The purpose of this page is to be a comprehensive response to every
            alleged "contradiction" in the Bible.
          </p>

          <a id="top" style={{ color: "rgba(0, 0, 0, .84)" }}>
            <h3>Table of contents</h3>
          </a>

          <h4>Old Testament</h4>

          <div className="table-contents-container">
            {CONTRADICTIONS.slice(0, matthewIndex).map(book => {
              return (
                <div className="table-contents-item" key={book.book}>
                  <a href={`#${book.book}`} id={`top-${book.book}`}>
                    {book.book} ({book.answers.length})
                  </a>
                </div>
              );
            })}
          </div>

          <h4>New Testament</h4>

          <div className="table-contents-container">
            {CONTRADICTIONS.slice(matthewIndex).map(book => {
              return (
                <div className="table-contents-item" key={book.book}>
                  <a href={`#${book.book}`} id={`top-${book.book}`}>
                    {book.book} ({book.answers.length})
                  </a>
                </div>
              );
            })}
          </div>

          {CONTRADICTIONS.map(book => {
            return (
              <div key={book.book}>
                <a
                  href={`#top`}
                  id={book.book}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 28
                  }}
                >
                  <FaChevronUp />
                  &nbsp;Top
                </a>
                <h3
                  key={book.book}
                  className="nomargin"
                  style={{ borderBottom: "1px solid rgba(0, 0, 0, .54)" }}
                >
                  {book.book}
                </h3>

                {book.answers.map((answer, index) => {
                  linkCount++;

                  if (answer.see) {
                    const foundBook = find(CONTRADICTIONS, book => {
                      return book.book.toLowerCase() === answer.see[0];
                    });

                    const foundAnswer = find(
                      foundBook.answers,
                      answerData => answerData.bookVerses === answer.see[1]
                    );

                    return renderLink({
                      index,
                      book: book.book,
                      bookVerses: answer.bookVerses,
                      question: foundAnswer.question,
                      count: linkCount
                    });
                  }

                  return renderLink({
                    index,
                    book: book.book,
                    ...answer,
                    count: linkCount
                  });
                })}

                {book.answers.map((answer, index) => {
                  answerCount++;

                  if (answer.see) {
                    const foundBook = find(
                      CONTRADICTIONS,
                      book => book.book.toLowerCase() === answer.see[0]
                    );

                    const foundAnswer = find(
                      foundBook.answers,
                      answerData => answerData.bookVerses === answer.see[1]
                    );

                    const detailsKey = `${book.book}_${answer.bookVerses}`;

                    const hideDetails = !details[detailsKey];

                    return renderAnswer({
                      index,
                      book: book.book,
                      ...foundAnswer,
                      foundBookVerses: foundAnswer.bookVerses,
                      bookVerses: answer.bookVerses,
                      count: answerCount,
                      hideDetails,
                      toggleDetail() {
                        setDetails({
                          ...details,
                          [detailsKey]: !details[detailsKey]
                        });
                      }
                    });
                  }

                  return renderAnswer({
                    index,
                    book: book.book,
                    ...answer,
                    count: answerCount
                  });
                })}
              </div>
            );
          })}
        </div>
      </ReadingContainer>

      <style jsx global>{`
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

        .divider {
          display: block;
          font-size: 35px;
          letter-spacing: 0.6em;
          text-align: center;
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

        .table-contents-container {
          display: flex;
          flex-wrap: wrap;
        }

        .table-contents-item {
          font-size: 16px;
          margin-top: 10px;
          width: 150px;
        }
      `}</style>
    </Container>
  );
};

export default BibleContradictions;
