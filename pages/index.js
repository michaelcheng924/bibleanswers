import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

import ANSWERS from "../constants/answers";
import { ReadingContainer } from "../components/writing";
import Tag from "../components/Tag";

const Home = () => (
  <div>
    <Head title="Bible Answers - Explaining and Defending the Bible" />
    <Nav />

    <ReadingContainer padding={0}>
      {ANSWERS.map(pageData => {
        return (
          <Link href={pageData.url} key={pageData.url}>
            <a>
              <div>
                <div className="answer-title">{pageData.title}</div>
                <div className="subtitle">{pageData.subtitle}</div>
                <div className="tags">
                  {pageData.tags.map(tag => {
                    return <Tag key={tag} tag={tag} />;
                  })}
                </div>
              </div>
              <img className="answer-image" src={pageData.imageUrl} />
            </a>
          </Link>
        );
      })}
    </ReadingContainer>

    <style jsx>{`
      a {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        text-decoration: none;
      }

      a:hover {
        background: #eee;
      }

      .answer-title {
        color: rgba(0, 0, 0, 0.84);
        font-size: 24px;
        font-weight: 600;
      }

      .subtitle {
        color: rgba(0, 0, 0, 0.54);
        font-size: 16px;
        margin-top: 2px;
      }

      .tags {
        margin-top: 12px;
      }

      .answer-image {
        margin-left: 20px;
        max-height: 100px;
        max-width: 150px;
      }
    `}</style>
  </div>
);

export default Home;
