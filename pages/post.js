import React from "react";
import Head from "next/head";
import styled from "styled-components";
import * as Amp from "react-amphtml";
import fetch from "isomorphic-unfetch";

import { createAmpGlobalStyle } from "../components/GlobalStyle";
import { AmpContainer } from "../components/Container";
import ReadingContainer from "../components/ReadingContainer";
import { AmpTitleSection } from "../components/TitleSection";
import Help from "../components/Help";

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

  const {
    title,
    description,
    image_url,
    date_added,
    updated_at,
    html,
    published
  } = post;

  const datePublished = date_added ? new Date(date_added) : new Date();

  const AmpGlobalStyle = createAmpGlobalStyle(slug);

  return (
    <AmpContainer>
      <Head>
        <title>{title} | Bible Answers</title>

        <meta name="description" content={description} />
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

      <AmpGlobalStyle slug={slug} />

      <AmpTitleSection {...post} />

      <ReadingContainer>
        {published ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <Help description={description} title={title} />
        )}

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
    </AmpContainer>
  );
};

Post.getInitialProps = async function({ req, query }) {
  const res = await fetch(
    `https://bibleanswersapi.herokuapp.com/posts/${query.slug ||
      req.url.slice(1)}`
  );
  const data = await res.json();

  return {
    post: data,
    slug: query.slug || req.url.slice(1)
  };
};

export default Post;
