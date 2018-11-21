import React from "react";
import Head from "next/head";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import { AmpContainer } from "../components/Container";
import ReadingContainer from "../components/ReadingContainer";
import { AmpListItem } from "../components/ListItem";

const Title = styled.h1`
  align-items: center;
  display: flex;
  font-size: 34px;
  line-height: 1.15;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Heading = styled.h2`
  align-items: center;
  display: flex;
  font-size: 34px;
  line-height: 1.15;
  padding: 0 20px;

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

const PostContainer = styled.li`
  margin-bottom: 10px;
`;

const AllPosts = ({ posts = [] }) => {
  const title = `${posts.length} Bible Questions and Answers | Bible Answers`;

  return (
    <AmpContainer>
      <Head>
        <title>{title}</title>

        <meta
          name="description"
          content={`All ${
            posts.length
          } of Bible Questions questions and answers. Learn how to explain and defend the Christian faith.`}
        />
      </Head>

      <ReadingContainer style={{ marginBottom: 0 }}>
        <Title>{posts.length} Bible Questions and Answers</Title>
        <Subtitle>Browse all of our questions and answers</Subtitle>
        <Divider>...</Divider>
      </ReadingContainer>
      <ReadingContainer style={{ padding: 0, width: "initial" }}>
        <Heading>All posts</Heading>
        {posts.map(post => {
          return (
            <a
              key={post.url}
              href={post.url}
              style={{ textDecoration: "none" }}
            >
              <AmpListItem {...post} />
            </a>
          );
        })}
      </ReadingContainer>
    </AmpContainer>
  );
};

AllPosts.getInitialProps = async function() {
  const res = await fetch(`https://bibleanswersapi.herokuapp.com/all_posts`);
  const data = await res.json();

  data.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));

  return {
    posts: data
  };
};

export default AllPosts;
