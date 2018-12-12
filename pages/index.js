import React, { useState } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

import { Container } from "../components/Container";
import { ListItem } from "../components/ListItem";
import TopLinks from "../components/TopLinks";
import ReadingContainer from "../components/ReadingContainer";
import Search from "../components/Search";

const Title = ({ children }) => (
  <div className="title">
    {children}{" "}
    <style jsx>{`
      .title {
        align-items: center;
        display: flex;
        font-size: 34px;
        font-weight: bold;
        line-height: 1.15;
        margin-top: 20px;
        padding: 0 20px;
      }

      @media screen and (max-width: 768px) {
        .title {
          font-size: 30px;
        }
      }
    `}</style>
  </div>
);

const PostsTagsContainer = ({ children }) => (
  <div className="post-tags-container">
    {children}{" "}
    <style jsx>{`
      .post-tags-container {
        display: flex;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);

const LinkTag = ({ children, href }) => (
  <a className="link-tag" href={href}>
    {children}{" "}
    <style jsx>{`
      .link-tag {
        color: rgba(0, 0, 0, 0.84);
        text-decoration: none;
      }
    `}</style>
  </a>
);

const MoreLink = ({ children, href }) => (
  <a className="more-link" href={href}>
    {children}{" "}
    <style jsx>{`
      .more-link {
        color: #689f38;
        cursor: pointer;
        display: block;
        font-size: 18px;
        margin-top: 10px;
        text-decoration: none;
      }
    `}</style>
  </a>
);

const Home = ({ posts = [], tags = [] }) => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Head>
        <title>
          Bible Answers | Explaining and Defending the Christian Worldview
        </title>
      </Head>

      <TopLinks />

      <PostsTagsContainer>
        <ReadingContainer style={{ padding: 0, width: "initial" }}>
          <Search
            onChange={setSearch}
            placeholder="Search Bible Answers"
            value={search}
          />
          <Title>Posts</Title>
          {posts.map(post => {
            return (
              <LinkTag key={post.url} href={post.url}>
                <ListItem {...post} noAmp />
              </LinkTag>
            );
          })}
        </ReadingContainer>

        <ReadingContainer style={{ width: "initial" }}>
          <MoreLink href="/contradictions-in-the-bible">
            "Contradictions" in the Bible
          </MoreLink>
        </ReadingContainer>
      </PostsTagsContainer>
    </Container>
  );
};

Home.getInitialProps = async function() {
  const res = await fetch("https://bibleanswersapi.herokuapp.com/homefetch");

  const data = await res.json();

  return {
    posts: data.posts,
    tags: data.tags
  };
};

export default Home;
