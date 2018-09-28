import "./styles.css";
import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { cloneDeep, isNumber, remove, some } from "lodash";

import {
  POSTS_ORGANIZED,
  POSTS_BY_MOST_RECENT
} from "../../../constants/posts";
import { closest } from "../../Nav";
import { ReadingContainer } from "../../Writing";
import ListItem from "../../ListItem";

class Home extends Component {
  state = {
    inputFocused: false,
    search: "",
    showFilter: false,
    tags: [],
    view: "Most recent"
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
    const { search, view } = this.state;

    const lowerSearch = search.toLowerCase();

    let answers;

    if (view === "Most recent") {
      answers = POSTS_BY_MOST_RECENT.filter(answer => {
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

      answers.sort((a, b) => {
        return new Date(b.updated || b.added) - new Date(a.updated || a.added);
      });
    } else {
      answers = cloneDeep(POSTS_ORGANIZED);
      answers = answers.reduce(
        (result, headingData) => {
          headingData.categories.forEach(categoryData => {
            if (categoryData.posts) {
              categoryData.posts = categoryData.posts.filter(post => {
                const lowerTitle = post.title.toLowerCase();

                const matches = lowerTitle.indexOf(lowerSearch) !== -1;

                if (matches) {
                  result.postCount++;
                }

                return matches;
              });
            } else {
              categoryData.subcategories.forEach(subcategoryData => {
                subcategoryData.posts = subcategoryData.posts.filter(post => {
                  const lowerTitle = post.title.toLowerCase();

                  const matches = lowerTitle.indexOf(lowerSearch) !== -1;

                  if (matches) {
                    result.postCount++;
                  }

                  return matches;
                });
              });
            }
          });

          result.postsOrganized.push(headingData);

          return result;
        },
        {
          postsOrganized: [],
          postCount: 0
        }
      );
    }

    remove(answers.postsOrganized, headingData => {
      remove(headingData.categories, categoryData => {
        if (categoryData.posts) {
          return !categoryData.posts.length;
        }

        remove(categoryData.subcategories, subcategoryData => {
          return !subcategoryData.posts.length;
        });

        return !categoryData.subcategories.length;
      });

      return !headingData.categories.length;
    });

    return answers;
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

  renderOrderBy(label) {
    const { view } = this.state;

    const style = {};

    if (view === label) {
      style.fontWeight = "bold";
      style.pointEvents = "none";
    }

    return (
      <div
        className="view"
        style={style}
        onClick={() => this.setState({ view: label })}
      >
        {label}
      </div>
    );
  }

  renderSearch(answers) {
    const { inputFocused, search } = this.state;

    return (
      <div className="search-container">
        <FaSearch
          style={{
            color: inputFocused ? "#039be5" : "rgba(0,0,0,.54)"
          }}
        />
        <div>
          <input
            className="search"
            onChange={event => this.setState({ search: event.target.value })}
            onFocus={() => this.setState({ inputFocused: true })}
            onBlur={() => this.setState({ inputFocused: false })}
            placeholder="Search"
            style={{
              borderBottom: inputFocused ? "1px solid #039be5" : ""
            }}
            value={search}
          />
          <div className="results">
            {`Showing ${
              isNumber(answers.postCount) ? answers.postCount : answers.length
            }/${POSTS_BY_MOST_RECENT.length} results`}
          </div>
        </div>
      </div>
    );
  }

  renderRecent(answers) {
    const { search } = this.state;

    return (
      <div>
        {answers.length
          ? answers.map(pageData => {
              return (
                <ListItem
                  key={pageData.url}
                  {...pageData}
                  search={search}
                  url={pageData.url}
                />
              );
            })
          : this.renderClear()}
      </div>
    );
  }

  renderPosts(postsData) {
    const { search } = this.state;

    const lowerSearch = search.toLowerCase();

    return postsData
      .map(post => {
        const { title } = post;

        const lowerText = title.toLowerCase();

        const startIndex = lowerText.indexOf(lowerSearch);

        if (startIndex === -1) {
          return title;
        }

        const first = title.slice(0, startIndex);
        const highlight = title.slice(startIndex, startIndex + search.length);
        const last = title.slice(startIndex + search.length);

        return `<li><a href="${
          post.url
        }">${first}<span class="highlight">${highlight}</span>${last}</a></li>`;
      })
      .join(" ");
  }

  renderTopics(answers) {
    const html = `
      <div class="writing">
        ${answers.postsOrganized
          .map((headingData, index) => {
            return `
            <h3 class="${index ? "" : "first"}">${headingData.heading}</h3>
            ${headingData.categories
              .map(categoryData => {
                return `
                <h4>${categoryData.category}</h4>
                ${
                  categoryData.subcategories
                    ? categoryData.subcategories
                        .map(subcategoryData => {
                          return `
                    <p class="first"><em>${subcategoryData.subcategory}</em></p>
                    <ul class="first">
                      ${this.renderPosts(subcategoryData.posts)}
                    </ul>
                  `;
                        })
                        .join(" ")
                    : `
                      <ul class="first">
                        ${this.renderPosts(categoryData.posts)}
                      </ul>
                    `
                }
              `;
              })
              .join(" ")}
          `;
          })
          .join(" ")}
      </div>
    `;

    return answers.postCount ? (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    ) : (
      this.renderClear()
    );
  }

  renderClear() {
    return (
      <div>
        <div className="empty-text">No results matched your search</div>
        <div
          className="empty-clear"
          onClick={() => this.setState({ search: "", tags: [] })}
        >
          Clear search
        </div>
      </div>
    );
  }

  render() {
    const { view } = this.state;

    const answers = this.getAnswersList();

    return (
      <div>
        <ReadingContainer
          marginBottom={20}
          marginTop={20}
          padding={view === "Most recent" ? 0 : "0 20px"}
        >
          <div className="views-container">
            <div className="views-label">Order by:</div>
            {this.renderOrderBy("Most recent")}
            {this.renderOrderBy("Topic")}
          </div>
          {this.renderSearch(answers)}
          {view === "Most recent"
            ? this.renderRecent(answers)
            : this.renderTopics(answers)}
        </ReadingContainer>
      </div>
    );
  }
}

export default Home;
