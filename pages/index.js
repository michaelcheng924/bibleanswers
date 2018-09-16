import React, { Component } from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import { FaFilter, FaSearch } from "react-icons/fa";
import { map, partial, some } from "lodash";

import { TAG_MAPPING } from "../components/Tag";
import Popover from "../components/Popover";
import ANSWERS from "../constants/answers";
import { ReadingContainer } from "../components/writing";
import ListItem from "../components/ListItem";
import Tag from "../components/Tag";

class Home extends Component {
  state = {
    inputFocused: false,
    search: "",
    showFilter: false,
    tags: []
  };

  getAnswersList() {
    return ANSWERS.filter(answer => {
      const { search } = this.state;

      const lowerSearch = search.toLowerCase();
      const lowerTitle = answer.title.toLowerCase();
      const lowerSubtitle = answer.subtitle.toLowerCase();

      const matchesTitle = lowerTitle.indexOf(lowerSearch) !== -1;
      const matchesSubtitle = lowerSubtitle.indexOf(lowerSearch) !== -1;
      const matchesTags = some(answer.tags, tag => {
        const lowerTag = tag.toLowerCase();
        return lowerTag.indexOf(lowerSearch) !== -1;
      });

      return matchesTitle || matchesSubtitle || matchesTags;
    });
  }

  onTagClick = tag => {
    const { tags } = this.state;

    tags.push(tag);

    this.setState({ tags: tags.sort() });
  };

  onRemoveTag = clickedTag => {
    const tags = this.state.tags.filter(tag => tag !== clickedTag);

    this.setState({ tags });
  };

  renderTags(tags, onClick, remove, marginTop = 0) {
    return map(tags, tag => {
      return (
        <div className="tag" onClick={partial(onClick, tag)}>
          <Tag remove={remove} tag={tag} />

          <style jsx>{`
            .tag {
              cursor: pointer;
              margin-bottom: 10px;
              margin-top: ${marginTop}px;
            }
          `}</style>
        </div>
      );
    });
  }

  renderFilterPopover() {
    const { tags } = this.state;

    const allTags = Object.keys(TAG_MAPPING).filter(tag => {
      return !some(tags, selectedTag => selectedTag === tag);
    });

    return (
      <div className="filter-popover">
        <div className="filter-popover-label">Selected filters:</div>
        <div className="filter-tags" style={{ marginBottom: 10 }}>
          {this.renderTags(tags, this.onTagClick, true)}
        </div>
        <div className="filter-popover-label">Filter by:</div>
        <div className="filter-tags">
          {this.renderTags(allTags, this.onTagClick)}
        </div>

        <style jsx>{`
          .filter-popover {
            padding: 20px;
          }

          .filter-popover-label {
            color: rgba(0, 0, 0, 0.54);
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
            text-transform: uppercase;
          }

          .filter-tags {
            display: flex;
            flex-wrap: wrap;
          }

          .filter-tag {
            cursor: pointer;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    );
  }

  render() {
    const { inputFocused, search, showFilter, tags } = this.state;

    return (
      <div>
        <Head
          title="Bible Answers - Explaining and Defending the Bible"
          description="Reformed apologetics and theologry. Answers to questions about the Bible."
        />
        <Nav home={false} />

        <ReadingContainer marginTop={20} padding={0}>
          <div className="search-container">
            <Popover
              isOpen={showFilter}
              body={this.renderFilterPopover()}
              place="below"
              width="100%"
            >
              <FaFilter
                className="icon-filter"
                onClick={() => this.setState({ showFilter: !showFilter })}
                style={{
                  color: showFilter ? "039be5" : "rgba(0,0,0,.54)",
                  cursor: "pointer",
                  marginRight: 10
                }}
              />
            </Popover>
            <FaSearch />
            <div>
              <input
                className="search"
                onChange={event =>
                  this.setState({ search: event.target.value })
                }
                onFocus={() => this.setState({ inputFocused: true })}
                onBlur={() => this.setState({ inputFocused: false })}
                placeholder="Search"
                value={search}
              />
              <div className="search-tags">
                {this.renderTags(tags, this.onTagClick, true, 10)}
              </div>
            </div>
          </div>

          {this.getAnswersList().map(pageData => {
            return (
              <ListItem key={pageData.url} {...pageData} search={search} />
            );
          })}
        </ReadingContainer>

        <style jsx>{`
          .search-container {
            color: rgba(0, 0, 0, 0.54);
            display: flex;
            justify-content: center;
            margin: 0 auto 20px;
            ${inputFocused ? "color: #039be5;" : ""};
          }

          .search {
            border: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.54);
            display: block;
            font-size: 20px;
            margin-left: 4px;
            outline: none;
            text-align: center;
            width: 300px;
            ${inputFocused ? "border-bottom: 1px solid #039be5;" : ""};
          }

          .search-tags {
            display: flex;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
