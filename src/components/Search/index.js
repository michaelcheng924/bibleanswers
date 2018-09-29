import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { isNumber } from "lodash";

import "./styles.css";
import { ALL_POSTS } from "../../constants/posts";

export default class Template extends Component {
  state = {
    inputFocused: false
  };

  render() {
    const { inputFocused } = this.state;
    const { onSearchChange, posts, search } = this.props;

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
            onChange={onSearchChange}
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
              isNumber(posts.postCount) ? posts.postCount : posts.length
            }/${ALL_POSTS.length} results`}
          </div>
        </div>
      </div>
    );
  }
}
