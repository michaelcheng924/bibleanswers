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

export default class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: props.match.params.category || "",
      root: props.match.params.root || "newest",
      search: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.path !== "/" && this.props.match.path === "/") {
      this.setState({ category: "", root: "newest", search: "" });
    }
  }

  setRoot = root => {
    this.setState({ root, search: root === "newest" ? this.state.search : "" });
  };

  onSearchChange = event => {
    this.setState({ search: event.target.value });
  };

  onClearSearch = () => {
    this.setState({ search: "" });
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
          const isActive = categoryData.categoryUrl === category;

          const classNames = css("first", {
            "search-category__active": isActive
          });

          return (
            <div key={categoryData.categoryUrl}>
              <ReadingContainer>
                <div className="writing">
                  <Link
                    onClick={() =>
                      this.setState({
                        category: isActive ? "" : categoryData.categoryUrl
                      })
                    }
                    to={`/categories/${root}/${categoryData.categoryUrl}`}
                  >
                    <p className={classNames}>
                      {categoryData.category}
                      <span className={isActive ? "caret-up" : "caret-down"} />
                    </p>
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
        <div className="empty-clear" onClick={this.onClearSearch}>
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
        <div className="home-image-section">
          Defending and explaining the biblical worldview
        </div>
        <ReadingContainer style={{ padding: 0 }}>
          <Search
            posts={posts}
            onClearSearch={this.onClearSearch}
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
