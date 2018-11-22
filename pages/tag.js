import React from "react";
import Head from "next/head";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import { AmpContainer } from "../components/Container";
import { AmpTitleSection } from "../components/TitleSection";
import ReadingContainer from "../components/ReadingContainer";
import { AmpListItem } from "../components/ListItem";

const Title = styled.h2`
  align-items: center;
  display: flex;
  font-size: 34px;
  line-height: 1.15;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 23px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 30px;

  @media screen and (max-width: 1199px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
  }
`;

const Divider = styled.div`
  display: block;
  font-size: 35px;
  letter-spacing: 0.6em;
  text-align: center;
`;

const LinkTag = styled.a`
  color: #689f38;
  text-decoration: none;
`;

const Tag = ({
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
  if (!title) {
    return [<h1>Tag not found</h1>, <a href="/">Bible Answers Home</a>];
  }

  const pageTitle = `${posts.length} "${title}" Questions and Answers`;

  const datePublished = date_added ? new Date(date_added) : new Date();

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

      <AmpTitleSection
        title={pageTitle}
        subtitle={subtitle}
        image_url={image_url}
        date_added={date_added}
        user={user}
      />

      <ReadingContainer style={{ padding: 0, width: "initial" }}>
        {posts.map(post => {
          return (
            <LinkTag href={post.url} key={post.url}>
              <AmpListItem {...post} />
            </LinkTag>
          );
        })}
      </ReadingContainer>
    </AmpContainer>
  );
};

Tag.getInitialProps = async function({ query }) {
  const res = await fetch(
    `https://bibleanswersapi.herokuapp.com/tags/${query.slug}`
  );
  const data = await res.json();

  return data;
};

export default Tag;
