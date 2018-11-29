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
import { AmpListItem } from "../components/ListItem";

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
    url,
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

      <AmpGlobalStyle slug={slug} />

      <AmpTitleSection {...post} />

      <ReadingContainer>
        {published ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <Help description={description} title={title} />
        )}

        <div className="divider">...</div>

        <div className="writing">
          <h4>Take your study of the Bible to the next level</h4>
          <p>
            Note: We do <strong>not</strong> earn any commision on these
            products. We recommend them solely because we think they are
            valuable tools for growing in your knowledge of God's word.
          </p>

          <p className="first">
            <a href="https://www.logos.com" target="_blank">
              Logos Bible Software
            </a>
          </p>
          <p className="first">
            <a href="https://www.accordancebible.com/" target="_blank">
              Accordance Bible Software
            </a>
          </p>
        </div>

        <div className="writing">
          <h3>Related posts</h3>
          <RelativeAmpList
            specName="default"
            src={`https://bibleanswersapi.herokuapp.com/relatedposts/${slug}`}
            items="items"
            layout="fill"
          >
            <Amp.Template specName="default" type="amp-mustache">
              <a href="{{url}}">
                <AmpListItem
                  title={"{{title}}"}
                  subtitle={"{{subtitle}}"}
                  image_url_small={"{{image_url_small}}"}
                />
              </a>
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
