import React from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import { FaTag } from "react-icons/fa";

import Container from "../components/Container";
import ListItem from "../components/ListItem";
import ReadingContainer from "../components/ReadingContainer";

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
  color: #689f38;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 6px;
`;

const LinkTag = styled.a`
  text-decoration: none;
`;

const MoreLink = styled.a`
  color: #689f38;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;
  text-decoration: none;
`;

const Home = ({ recentPosts = [], tags = [], postsCount }) => (
  <Container>
    <title>
      Bible Answers | Explaining and Defending the Christian Worldview
    </title>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "WebSite",
          url: "https://bibleanswers.io/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://bibleanswers.io/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })
      }}
    />

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
        <center>
          <MoreLink href="all-posts">All {postsCount} posts</MoreLink>
        </center>
      </ReadingContainer>

      <ReadingContainer style={{ width: "initial" }}>
        <Title style={{ padding: 0 }}>Tags</Title>
        <ul>
          {tags.map(tag => {
            return (
              <LinkTag key={tag.url} href={tag.url}>
                <li>
                  <TagText>
                    {tag.title} ({tag.posts_count})
                  </TagText>
                </li>
              </LinkTag>
            );
          })}
        </ul>
        <MoreLink href="/posts-in-progress">Posts in progress</MoreLink>
      </ReadingContainer>
    </PostsTagsContainer>
  </Container>
);

Home.getInitialProps = async function() {
  const res = await fetch("https://bibleanswersapi.herokuapp.com/homefetch");

  const data = await res.json();

  return {
    recentPosts: data.recent_posts,
    tags: data.tags,
    postsCount: data.posts_count
  };
};

export default Home;
