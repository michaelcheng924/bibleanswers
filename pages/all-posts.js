import React from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import Container from "../components/Container";
import ReadingContainer from "../components/ReadingContainer";
import ListItem from "../components/ListItem";

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
  font-size: 26px;
  line-height: 1.22;
  margin: 0;
  margin-top: 30px;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-top: 22px;
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

const TagsJumpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  padding: 0 20px;
`;

const TagJump = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.54);
  border-radius: 3px;
  font-size: 16px;
  margin: 0 10px 10px 0;
  padding: 5px 10px;
  width: 150px;
`;

const AllPosts = ({ tags = [], posts_count }) => {
  const title = `${posts_count} Bible Questions and Answers | Bible Answers`;

  return (
    <Container>
      <title>{title}</title>
      <meta
        type="description"
        content={`All ${posts_count} of Bible Answers's questions and answers. Learn about and defend the Bible with these questions and answers about a wide range of categories.`}
      />

      <ReadingContainer style={{ marginBottom: 0 }}>
        <Title>{posts_count} Bible Questions and Answers</Title>
        <Subtitle>Browse all of our questions and answers</Subtitle>
        <Divider>...</Divider>
      </ReadingContainer>
      <a id="top">
        <Heading>Tags</Heading>
      </a>
      <TagsJumpContainer>
        {tags.map(tag => {
          return (
            <LinkTag key={tag.url} href={`#${tag.url}`}>
              <TagJump>
                {tag.title} ({tag.posts.length})
              </TagJump>
            </LinkTag>
          );
        })}
      </TagsJumpContainer>
      <br />
      <ReadingContainer style={{ padding: 0 }}>
        {tags.map(tag => {
          return (
            <div key={tag.url}>
              <a id={tag.url}>
                <Heading>
                  {tag.title} ({tag.posts.length}){" "}
                  <LinkTag href="#top" style={{ fontSize: 13 }}>
                    Back to top
                  </LinkTag>
                </Heading>
              </a>
              {tag.posts.map(post => {
                return (
                  <LinkTag href={post.url} key={post.url}>
                    <ListItem {...post} />
                  </LinkTag>
                );
              })}
            </div>
          );
        })}
      </ReadingContainer>
    </Container>
  );
};

AllPosts.getInitialProps = async function({ query }) {
  const res = await fetch(
    `http://bibleanswersapi.herokuapp.com/tags_for_all_posts`
  );
  const data = await res.json();

  return { tags: data.tags, posts_count: data.posts_count };
};

export default AllPosts;
