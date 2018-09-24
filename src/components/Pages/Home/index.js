import "./styles.css";
import React, { Component } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { intersection, map, partial, some } from "lodash";

import { POSTS } from "../../../constants/posts";
import { closest } from "../../Nav";
import Popover from "../../Popover";
import { ReadingContainer } from "../../Writing";
import ListItem from "../../ListItem";
import Tag, { TAG_MAPPING } from "../../Tag";

class Home extends Component {
  state = {
    inputFocused: false,
    posts: POSTS,
    search: "",
    showFilter: false,
    tags: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.showFilter && this.state.showFilter) {
      document.addEventListener("click", this.onDocumentClick);
    } else if (prevState.showFilter && !this.state.showFilter) {
      document.removeEventListener("click", this.onDocumentClick);
    }
  }

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
    const { posts, search, tags } = this.state;

    let answers = tags.length
      ? posts.filter(answer => {
          return intersection(answer.tags, tags).length;
        })
      : posts;

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
        <div
          key={tag}
          className="tag"
          onClick={partial(onClick, tag)}
          style={{ marginTop: marginTop }}
        >
          <Tag remove={remove} tag={tag} />
        </div>
      );
    });
  }

  renderFilterPopover() {
    const { posts, tags } = this.state;

    const allTags = Object.keys(TAG_MAPPING).filter(tag => {
      return !some(tags, selectedTag => selectedTag === tag);
    });

    return (
      <div className="filter-popover">
        <div className="results">
          {`${this.getAnswersList().length}/${posts.length} results`}
        </div>
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
      </div>
    );
  }

  render() {
    const { inputFocused, posts, search, showFilter, tags } = this.state;

    const answers = this.getAnswersList();

    return (
      <div>
        <ReadingContainer marginTop={20} padding={0}>
          <div className="search-container">
            <Popover
              isOpen={showFilter}
              body={this.renderFilterPopover()}
              place="below"
              style={{
                color: inputFocused ? "#039be5" : ""
              }}
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
                style={{
                  borderBottom: inputFocused ? "1px solid #039be5" : ""
                }}
                value={search}
              />
              <div className="search-tags">
                {this.renderTags(tags, this.onRemoveTag, true, 10)}
              </div>
              <div className="results">
                {`Showing ${this.getAnswersList().length}/${
                  posts.length
                } results`}
              </div>
            </div>
          </div>

          {answers.length ? (
            this.getAnswersList().map(pageData => {
              return (
                <ListItem
                  key={pageData.url}
                  {...pageData}
                  search={search}
                  url={pageData.url}
                />
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
      </div>
    );
  }
}

export default Home;
