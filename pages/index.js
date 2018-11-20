import React, { useEffect } from "react";
import fetch from "isomorphic-unfetch";

import { Container } from "../components/Container";
import { ListItem } from "../components/ListItem";
import TopLinks from "../components/TopLinks";
import ReadingContainer from "../components/ReadingContainer";

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

const TagText = ({ children }) => (
  <div className="tag-text">
    {children}{" "}
    <style jsx>{`
      .tag-text {
        color: #689f38;
        cursor: pointer;
        font-size: 18px;
        margin-bottom: 6px;
      }
    `}</style>
  </div>
);

const LinkTag = ({ children, href }) => (
  <a className="link-tag" href={href}>
    {children}{" "}
    <style jsx>{`
      .link-tag {
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
        font-size: 18px;
        margin-top: 10px;
        text-decoration: none;
      }
    `}</style>
  </a>
);

const Home = ({ recentPosts = [], tags = [], postsCount }) => {
  useEffect(() => {
    var cx = "002602022467339721509:o7qkawmakey";
    var gcse = document.createElement("script");
    gcse.type = "text/javascript";
    gcse.async = true;
    gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(gcse, s);

    const placeholderInterval = setInterval(() => {
      const searchBox = document.getElementById("gsc-i-id1");

      if (searchBox) {
        searchBox.placeholder = "Search Bible Answers";
        clearInterval(placeholderInterval);
      }
    }, 50);
  });

  return (
    <Container>
      <title>
        Bible Answers | Explaining and Defending the Christian Worldview
      </title>

      <TopLinks />

      <PostsTagsContainer>
        <ReadingContainer style={{ padding: 0, width: "initial" }}>
          <div
            dangerouslySetInnerHTML={{
              __html: "<gcse:search placeholder='Search'></gcse:search>"
            }}
            style={{ width: 320, margin: "0 auto" }}
          />
          <Title>Recent posts</Title>
          {recentPosts.map(post => {
            return (
              <LinkTag key={post.url} href={post.url}>
                <ListItem {...post} noAmp />
              </LinkTag>
            );
          })}
          <center>
            <MoreLink href="all-posts">All {postsCount} posts</MoreLink>
          </center>
        </ReadingContainer>

        <ReadingContainer>
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
};

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
