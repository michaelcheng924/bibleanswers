import React from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import { FaTag } from "react-icons/fa";

import ListItem from "../components/ListItem";
import ReadingContainer from "../components/ReadingContainer";

const Container = styled.div`
  color: rgba(0, 0, 0, 0.84);
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const Title = styled.h2`
  align-items: center;
  display: flex;
  font-size: 34px;
  line-height: 1.15;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const PostsTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagText = styled.div`
  align-items: center;
  color: #689f38;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  margin-bottom: 8px;
`;

const LinkTag = styled.a`
  color: #689f38;
  text-decoration: none;
`;

const Home = ({ recentPosts = [], tags = [] }) => (
  <Container>
    <title>
      Bible Answers | Explaining and Defending the Christian Worldview
    </title>

    <PostsTagsContainer>
      <ReadingContainer style={{ padding: 0 }}>
        <Title>Recent posts</Title>
        {recentPosts.map(post => {
          return (
            <LinkTag key={post.url} href={post.url}>
              <ListItem {...post} />
            </LinkTag>
          );
        })}
      </ReadingContainer>

      <ReadingContainer style={{ width: "initial" }}>
        <Title style={{ padding: 0 }}>Tags</Title>
        {tags.map(tag => {
          return (
            <LinkTag key={tag.url} href={tag.url}>
              <TagText>
                <FaTag style={{ marginRight: 6, height: 14, width: 14 }} />
                {tag.title} ({tag.posts_count})
              </TagText>
            </LinkTag>
          );
        })}
      </ReadingContainer>
    </PostsTagsContainer>
  </Container>
);

Home.getInitialProps = async function({ query }) {
  const res = await fetch("http://bibleanswersapi.herokuapp.com/homefetch");
  const data = await res.json();

  return {
    recentPosts: data.recent_posts,
    tags: data.tags
  };
};

export default Home;
