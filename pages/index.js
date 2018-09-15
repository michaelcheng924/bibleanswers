import React, { Component } from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import { some } from "lodash";

import ANSWERS from "../constants/answers";
import { ReadingContainer } from "../components/writing";
import ListItem from "../components/ListItem";

class Home extends Component {
  state = {
    search: ""
  };

  getAnswersList() {
    return ANSWERS.filter(answer => {
      const { search } = this.state;

      const lowerSearch = search.toLowerCase();
      const lowerTitle = answer.title;
      const lowerSubtitle = answer.subtitle;

      const matchesTitle = lowerTitle.indexOf(lowerSearch) !== -1;
      const matchesSubtitle = lowerSubtitle.indexOf(lowerSearch) !== -1;
      const matchesTags = some(answer.tags, tag => {
        const lowerTag = tag.toLowerCase();
        return lowerTag.indexOf(lowerSearch) !== -1;
      });

      return matchesTitle || matchesSubtitle || matchesTags;
    });
  }

  render() {
    const { search } = this.state;

    return (
      <div>
        <Head
          title="Bible Answers - Explaining and Defending the Bible"
          description="Reformed apologetics and theologry. Answers to questions about the Bible."
        />
        <Nav home={false} />

        <ReadingContainer marginTop={20} padding={0}>
          <input
            className="search"
            onChange={event => this.setState({ search: event.target.value })}
            placeholder="Search"
            value={search}
          />

          {this.getAnswersList().map(pageData => {
            return (
              <ListItem key={pageData.url} {...pageData} search={search} />
            );
          })}
        </ReadingContainer>

        <style jsx>{`
          .search {
            border: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.54);
            display: block;
            font-size: 20px;
            margin: 0 auto 20px;
            outline: none;
            text-align: center;
            width: 320px;
          }

          .search:focus {
            border-bottom: 2px solid #039be5;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
