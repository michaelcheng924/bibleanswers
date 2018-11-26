import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
import { find, isArray } from "lodash";

import CONTRADICTIONS from "../constants/contradictions";
import { AmpContainer } from "../components/Container";
import { AmpTitleSection } from "../components/TitleSection";
import { createAmpGlobalStyle } from "../components/GlobalStyle";
import ReadingContainer from "../components/ReadingContainer";

let linkCount = 0;
let answerCount = 0;

const TableContentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TableContentsItem = styled.div`
  font-size: 16px;
  margin-top: 10px;
  width: 150px;
`;

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
    <div>
      <blockquote className={index === 0 ? "first" : ""}>
        <strong>{passage.passage}</strong>
        {text}
      </blockquote>
    </div>
  );
}

function renderLink({ index, book, bookVerses, count, question }) {
  return (
    <div key={index} style={{ marginTop: 10 }}>
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
  question,
  allPassages,
  quickAnswer,
  fullPost,
  count
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
            <div>
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
  );
}

const BibleContradictions = ({
  url,
  title,
  subtitle,
  description,
  image_url,
  date_added,
  updated_at,
  posts = [],
  user = {}
}) => {
  const numbers = CONTRADICTIONS.reduce(
    (result, book) => {
      book.answers.forEach(answer => {
        result.total++;

        if (!answer.quickAnswer) {
          result.noQuickAnswer++;
        }

        if (!answer.fullPost) {
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

  const pageTitle = `Bible "Contradictions": Explanations for Every (${
    numbers.total
  }) alleged "contradiction" in the Bible`;

  const datePublished = date_added ? new Date(date_added) : new Date();

  const AmpGlobalStyle = createAmpGlobalStyle();

  return (
    <AmpContainer>
      <Head>
        <title>{pageTitle} | Bible Answers</title>

        <meta name="description" content={description} />
        <meta property="og:url" content={`https://bibleanswers.io${url}`} />
        <meta property="og:title" content={title} />
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
              headline: title,
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

      <AmpGlobalStyle />

      <AmpTitleSection
        title={pageTitle}
        subtitle={subtitle}
        image_url={image_url}
        date_added={date_added}
        user={user}
      />

      <ReadingContainer>
        <div className="writing">
          <h3>Work in progress!</h3>
          <p>
            This page is still a work in progress. Please check back to see
            updates!
          </p>

          <h3>Numbers</h3>

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

          <TableContentsContainer>
            {CONTRADICTIONS.slice(0, 39).map(book => {
              return (
                <TableContentsItem key={book.book}>
                  <a href={`#${book.book}`} id={`top-${book.book}`}>
                    {book.book} ({book.answers.length})
                  </a>
                </TableContentsItem>
              );
            })}
          </TableContentsContainer>

          <h4>New Testament</h4>

          <TableContentsContainer>
            {CONTRADICTIONS.slice(39).map(book => {
              return (
                <TableContentsItem key={book.book}>
                  <a href={`#${book.book}`} id={`top-${book.book}`}>
                    {book.book} ({book.answers.length})
                  </a>
                </TableContentsItem>
              );
            })}
          </TableContentsContainer>

          {CONTRADICTIONS.map(book => {
            return (
              <div>
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
                    const book = find(
                      CONTRADICTIONS,
                      book => book.book.toLowerCase() === answer.see[0]
                    );

                    const foundAnswer = find(
                      book.answers,
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
                    const book = find(
                      CONTRADICTIONS,
                      book => book.book.toLowerCase() === answer.see[0]
                    );

                    const foundAnswer = find(
                      book.answers,
                      answerData => answerData.bookVerses === answer.see[1]
                    );

                    return renderAnswer({
                      index,
                      book: book.book,
                      ...foundAnswer,
                      bookVerses: answer.bookVerses,
                      count: answerCount
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
    </AmpContainer>
  );
};

export default BibleContradictions;
