import React from "react";
import Head from "next/head";
import styled from "styled-components";
import * as Amp from "react-amphtml";
import * as AmpHelpers from "react-amphtml/helpers";
import fetch from "isomorphic-unfetch";

import ReadingContainer from "../components/ReadingContainer";
import TitleSection from "../components/TitleSection";

const Container = styled.div`
  color: rgba(0, 0, 0, 0.84);
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const StyledAmpImg = styled(Amp.AmpImg)`
  filter: ${props => {
    switch (props["data-filter"]) {
      case 1:
        return "blur(10px)";
      case 2:
        return "hue-rotate(180deg)";
      case 3:
        return "invert(100%)";
      case 4:
        return "grayscale(100%)";
      case 5:
        return "sepia(100%)";
      case 6:
        return "saturate(100%)";
      default:
        return "none";
    }
  }};
`;

const RelativeAmpList = styled(Amp.AmpList)`
  position: relative;
  min-height: 2rem;
`;

const defaultHeading = {
  text: "Hello, World!"
};

const Post = ({ post }) => {
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
      </Head>

      <TitleSection {...post} />

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <h1>Hacker News</h1>
      <RelativeAmpList
        specName="default"
        src={`https://www.graphqlhub.com/graphql?query=${encodeURIComponent(`
              {
                hn {
                  topStories {
                    id
                    title
                    score
                    descendants
                  }
                }
              }
            `)}`}
        items="data.hn.topStories"
        layout="fill"
      >
        <Amp.Template specName="default" type="amp-mustache">
          <div>
            <a
              href="https://news.ycombinator.com/item?id={{id}}"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"{{title}} ⭐ {{score}} 💬 {{descendants}}"}
            </a>
          </div>
        </Amp.Template>
      </RelativeAmpList>
    </Container>
  );
};

Post.getInitialProps = async function({ query }) {
  const res = await fetch(
    `http://bibleanswersapi.herokuapp.com/posts/${query.slug}`
  );
  const data = await res.json();

  return {
    post: data
  };
};

export default Post;
