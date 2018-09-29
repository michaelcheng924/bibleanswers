import "./styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { some } from "lodash";
import css from "classnames";

import APOLOGETICS from "../../../constants/posts/apologetics";
import THEOLOGY from "../../../constants/posts/theology";
import { ALL_POSTS, POSTS_BY_MOST_RECENT } from "../../../constants/posts";
import { ReadingContainer } from "../../Writing";
import ListItem from "../../ListItem";
import Search from "../../Search";
import SearchCategories from "../../SearchCategories";

const DATA_MAPPING = {
  apologetics: APOLOGETICS,
  theology: THEOLOGY
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: props.match.params.category || "",
      inputFocused: false,
      root: props.match.params.root || "newest",
      search: "",
      showFilter: false,
      tags: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.showFilter && this.state.showFilter) {
      document.addEventListener("click", this.onDocumentClick);
    } else if (prevState.showFilter && !this.state.showFilter) {
      document.removeEventListener("click", this.onDocumentClick);
    }

    const { category, root } = this.props.match.params;

    if (prevProps.match.params.root !== root) {
      this.setState({ root });
    }

    if (prevProps.match.params.category !== category) {
      this.setState({ category });
    }
  }

  setRoot = root => {
    this.setState({ root });
  };

  onSearchChange = event => {
    this.setState({ search: event.target.value });
  };

  getPostsList(posts) {
    const { search } = this.state;

    const lowerSearch = search.toLowerCase();

    return posts.filter(answer => {
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

  renderNewest() {
    const posts = this.getPostsList(POSTS_BY_MOST_RECENT);

    return this.renderPosts(posts);
  }

  renderCategories() {
    const { category, root } = this.state;

    if (root === "newest") {
      return null;
    }

    const data = DATA_MAPPING[root];

    return (
      <div>
        <ReadingContainer>
          <div className="writing">
            <h4>{data.heading}</h4>
          </div>
        </ReadingContainer>
        {data.categories.map(categoryData => {
          const classNames = css("first", {
            "search-category__active": categoryData.categoryUrl === category
          });

          return (
            <div key={categoryData.categoryUrl}>
              <ReadingContainer>
                <div className="writing">
                  <Link to={`/categories/${root}/${categoryData.categoryUrl}`}>
                    <p className={classNames}>{categoryData.category}</p>
                  </Link>
                </div>
              </ReadingContainer>
              <ReadingContainer style={{ padding: 0 }}>
                {categoryData.categoryUrl === category
                  ? this.renderPosts(categoryData.posts)
                  : null}
              </ReadingContainer>
            </div>
          );
        })}
      </div>
    );
  }

  renderPosts(posts) {
    const { search } = this.state;

    return (
      <div>
        {posts.length
          ? posts.map(pageData => {
              return (
                <ListItem key={pageData.url} {...pageData} search={search} />
              );
            })
          : this.renderClear()}
      </div>
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

  renderOptions() {
    return (
      <div className="home-options">
        <div className="home-option">Apologetics</div>
        <div className="home-option">Theology</div>
      </div>
    );
  }

  render() {
    const { category, root, search } = this.state;

    const posts = this.getPostsList(ALL_POSTS);

    return (
      <div className="home-container">
        <ReadingContainer style={{ padding: 0 }}>
          <Search
            posts={posts}
            onSearchChange={this.onSearchChange}
            search={search}
          />
          <SearchCategories
            category={category}
            renderPosts={this.renderPosts}
            root={root}
            setRoot={this.setRoot}
          />
          {root === "newest" || search
            ? this.renderNewest()
            : this.renderCategories()}
        </ReadingContainer>
      </div>
    );
  }
}

export default Home;
