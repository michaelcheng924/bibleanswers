import React from "react";
import styled from "styled-components";

import Container from "../components/Container";
import ReadingContainer from "../components/ReadingContainer";
import ListItem from "../components/ListItem";

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

const Tag = ({ title, subtitle, description, posts = [] }) => {
  if (!title) {
    return [<h1>Tag not found</h1>, <a href="/">Bible Answers Home</a>];
  }

  const pageTitle = `${
    posts.length
  } "${title}" Questions and Answers | Bible Answers`;

  return (
    <Container>
      <title>{pageTitle}</title>
      <meta type="description" content={description} />

      <ReadingContainer style={{ marginBottom: 0 }}>
        <Title>
          {posts.length} "{title}" Questions and Answers
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <Divider>...</Divider>
      </ReadingContainer>
      <br />
      <ReadingContainer style={{ padding: 0 }}>
        {posts.map(post => {
          return (
            <LinkTag href={post.url} key={post.url}>
              <ListItem {...post} />
            </LinkTag>
          );
        })}
      </ReadingContainer>
    </Container>
  );
};

Tag.getInitialProps = async function({ query }) {
  const res = await fetch(
    `http://bibleanswersapi.herokuapp.com/tags/${query.slug}`
  );
  const data = await res.json();

  return data;
};

export default Tag;
