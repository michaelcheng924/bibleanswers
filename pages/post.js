import React from "react";
import Head from "next/head";
import styled from "styled-components";
import * as Amp from "react-amphtml";
import fetch from "isomorphic-unfetch";

import GlobalStyle from "../components/GlobalStyle";
import ReadingContainer from "../components/ReadingContainer";
import TitleSection from "../components/TitleSection";

const Container = styled.div`
  color: rgba(0, 0, 0, 0.84);
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;

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

  return (
    <Container>
      <Head>
        <title>{post.title} | Bible Answers</title>
        <meta name="description" content={post.description} />
      </Head>

      <GlobalStyle />

      <TitleSection {...post} />

      <ReadingContainer>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

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
