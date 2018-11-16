import React from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import { FaTag } from "react-icons/fa";

import Container from "../components/Container";
import ReadingContainer from "../components/ReadingContainer";

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
  margin-bottom: 20px;
`;

const PostTitle = styled.div`
  color: #689f38;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PostTag = styled.div`
  align-items: center;
  display: flex;
  margin-right: 10px;
  margin-top: 4px;
  text-decoration: none;
`;

const PostsInProgress = ({ posts = [] }) => {
  const title = `${
    posts.length
  } Bible Questions and Answers (In Progress) | Bible Answers`;

  return (
    <Container>
      <title>{title}</title>
      <meta
        type="description"
        content={`All ${
          posts.length
        } of Bible Answers's questions and answers that are in progress. Learn about and defend the Bible with these questions and answers about a wide range of categories.`}
      />

      <ReadingContainer style={{ marginBottom: 0 }}>
        <Title>{posts.length} Bible Questions and Answers (In Progress)</Title>
        <Subtitle>
          Browse all of our questions and answers that are in progress
        </Subtitle>
        <Divider>...</Divider>
      </ReadingContainer>
      <ReadingContainer>
        <Heading>Posts in progress</Heading>
        <ul>
          {posts.map(post => {
            return (
              <PostContainer key={post.url}>
                <a href={post.url} style={{ textDecoration: "none" }}>
                  <PostTitle>{post.title}</PostTitle>
                </a>
                <PostTags>
                  {post.tags.map(tag => {
                    return (
                      <PostTag key={tag.title}>
                        <FaTag
                          style={{
                            marginRight: 6,
                            marginTop: 4,
                            height: 13,
                            width: 13
                          }}
                        />
                        <div>{tag.title}</div>
                      </PostTag>
                    );
                  })}
                </PostTags>
              </PostContainer>
            );
          })}
        </ul>
      </ReadingContainer>
    </Container>
  );
};

PostsInProgress.getInitialProps = async function({ query }) {
  const res = await fetch(
    `https://bibleanswersapi.herokuapp.com/posts_in_progress`
  );
  const data = await res.json();

  return { posts: data };
};

export default PostsInProgress;
