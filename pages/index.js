import React, { Component } from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import { FaFilter, FaSearch } from "react-icons/fa";
import { intersection, map, partial, some } from "lodash";

import { closest } from "../components/nav";
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

  onDocumentClick = event => {
    if (
      this.state.showFilter &&
      !event.target.classList.contains("icon-filter") &&
      !closest(event.target, ".icon-filter") &&
      !closest(event.target, ".icon-cross") &&
      !closest(event.target, ".filter-popover") &&
      !event.target.classList.contains("filter-popover") &&
      !event.target.classList.contains("tag-name")
    ) {
      this.setState({ showFilter: false });
    }
  };

  getAnswersList() {
    const { search, tags } = this.state;

    let answers = tags.length
      ? ANSWERS.filter(answer => {
          return intersection(answer.tags, tags).length;
        })
      : ANSWERS;

    answers = answers.filter(answer => {
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

    return answers.sort((a, b) => {
      return new Date(b.updated || b.added) - new Date(a.updated || a.added);
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
        <div key={tag} className="tag" onClick={partial(onClick, tag)}>
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
        <div
          className="filter-tags"
          style={{ marginBottom: tags.length ? 10 : 20 }}
        >
          {tags.length ? (
            this.renderTags(tags, this.onRemoveTag, true)
          ) : (
            <div className="no-tags">No tags selected</div>
          )}
        </div>
        <div className="filter-popover-label">Filter by:</div>
        <div className="filter-tags">
          {allTags.length ? (
            this.renderTags(allTags, this.onTagClick)
          ) : (
            <div className="no-tags">All tags selected</div>
          )}
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

          .no-tags {
            color: rgba(0, 0, 0, 0.54);
            font-style: italic;
          }
        `}</style>
      </div>
    );
  }

  render() {
    const { inputFocused, search, showFilter, tags } = this.state;

    const answers = this.getAnswersList();

    return (
      <div>
        <Head
          title="Bible Answers - Explaining and Defending the Bible"
          description="Reformed apologetics and theologry. Answers to questions about the Bible."
        />
        <Nav home={false} onDocumentClick={this.onDocumentClick} />

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
                {this.renderTags(tags, this.onRemoveTag, true, 10)}
              </div>
            </div>
          </div>

          {answers.length ? (
            this.getAnswersList().map(pageData => {
              return (
                <ListItem key={pageData.url} {...pageData} search={search} />
              );
            })
          ) : (
            <div>
              <div className="empty-text">No results matched your search</div>
              <div
                className="empty-clear"
                onClick={() => this.setState({ search: "", tags: [] })}
              >
                Clear search
              </div>
            </div>
          )}
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

          .empty-text {
            color: rgba(0, 0, 0, 0.54);
            font-size: 24px;
            margin-top: 30px;
            text-align: center;
          }

          .empty-clear {
            color: #689f38;
            cursor: pointer;
            font-size: 20px;
            margin-top: 10px;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
