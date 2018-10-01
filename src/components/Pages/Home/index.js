import "./styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { identity, map, some } from "lodash";
import css from "classnames";

import { ReadingContainer } from "../../Writing";
import ListItem from "../../ListItem";
import Search from "../../Search";
import SearchCategories from "../../SearchCategories";

const DATA_MAPPING = {
  apologetics: "/categories/apologetics",
  theology: "/categories/theology"
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

  getFilteredPosts(posts) {
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

  renderNewest(filteredPosts) {
    return this.renderPosts(filteredPosts);
  }

  renderCategories() {
    const { category, root } = this.state;
    const { structuredPosts } = this.props;

    if (root === "newest") {
      return null;
    }

    const data = structuredPosts[DATA_MAPPING[root]];

    const categories = map(data.categories, identity).sort((a, b) => {
      const textA = a.category.toUpperCase();
      const textB = b.category.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    return (
      <div>
        <ReadingContainer>
          <div className="writing">
            <h4>{data.heading}</h4>
          </div>
        </ReadingContainer>
        {categories.map(categoryData => {
          const isActive = categoryData.url === category;

          const classNames = css("first", {
            "search-category__active": isActive
          });

          return (
            <div key={categoryData.url}>
              <ReadingContainer>
                <div className="writing">
                  <Link
                    onClick={() =>
                      this.setState({
                        category: isActive ? "" : categoryData.url
                      })
                    }
                    to={`/categories/${root}/${categoryData.url}`}
                  >
                    <p className={classNames}>
                      {categoryData.category}
                      <span className={isActive ? "caret-up" : "caret-down"} />
                    </p>
                  </Link>
                </div>
              </ReadingContainer>
              <ReadingContainer style={{ padding: 0 }}>
                {categoryData.url === category
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
    const { posts } = this.props;

    const filteredPosts = this.getFilteredPosts(this.props.posts);

    return (
      <div className="home-container">
        <div className="home-image-section">
          Defending and explaining the biblical worldview
        </div>
        <ReadingContainer style={{ padding: 0 }}>
          <Search
            filteredPosts={filteredPosts}
            onClearSearch={this.onClearSearch}
            onSearchChange={this.onSearchChange}
            posts={posts}
            search={search}
          />
          <SearchCategories
            category={category}
            renderPosts={this.renderPosts}
            root={root}
            setRoot={this.setRoot}
          />
          {root === "newest" || search
            ? this.renderNewest(filteredPosts)
            : this.renderCategories()}
        </ReadingContainer>
      </div>
    );
  }
}
