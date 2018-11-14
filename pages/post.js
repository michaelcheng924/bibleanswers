import React from "react";
import Head from "next/head";
import styled from "styled-components";
import * as Amp from "react-amphtml";
import fetch from "isomorphic-unfetch";

import GlobalStyle from "../components/GlobalStyle";
import Container from "../components/Container";
import ReadingContainer from "../components/ReadingContainer";
import TitleSection from "../components/TitleSection";

const RelativeAmpList = styled(Amp.AmpList)`
  position: relative;
  min-height: 2rem;
`;

const Post = ({ post, slug }) => {
  if (!post) {
    return [
      <h1>Post not found</h1>,
      <div>
        <a href="https://bibleanswers.io">Bible Answers Home</a>
      </div>
    ];
  }

  const { title, description, image_url, date_added, updated_at, html } = post;

  const schemaInfo = ``;

  const datePublished = date_added ? new Date(date_added) : new Date();

  return (
    <Container>
      <Head>
        <title>{title} | Bible Answers</title>
        <meta name="description" content={description} />

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

      <GlobalStyle />

      <TitleSection {...post} />

      <ReadingContainer>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <div className="writing">
          <h3>Related posts</h3>
          <RelativeAmpList
            specName="default"
            src={`https://bibleanswersapi.herokuapp.com/relatedposts/${slug}`}
            items="items"
            layout="fill"
          >
            <Amp.Template specName="default" type="amp-mustache">
              <div>
                <a href="{{url}}" target="_blank" rel="noopener noreferrer">
                  <p className="first">&rsaquo; {"{{title}}"}</p>
                </a>
              </div>
            </Amp.Template>
          </RelativeAmpList>
        </div>
      </ReadingContainer>
    </Container>
  );
};

Post.getInitialProps = async function({ query }) {
  const res = await fetch(
    `http://bibleanswersapi.herokuapp.com/posts/${query.slug}`
  );
  const data = await res.json();

  return {
    post: data,
    slug: query.slug
  };
};

export default Post;
