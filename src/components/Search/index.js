import "./styles.css";
import React, { Component } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";

export default class Template extends Component {
  state = {
    inputFocused: false
  };

  render() {
    const { inputFocused } = this.state;
    const {
      filteredPosts,
      onClearSearch,
      onSearchChange,
      posts,
      search
    } = this.props;

    return (
      <div className="search-container">
        <FaSearch
          style={{
            color: inputFocused ? "#039be5" : "rgba(0,0,0,.54)",
            position: "relative",
            top: 5
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
            {`Showing ${filteredPosts.length}/${posts.length} results`}
          </div>
        </div>
        {search ? (
          <FaTimes
            style={{
              color: "#F44336",
              cursor: "pointer",
              position: "relative",
              top: 5
            }}
            onClick={onClearSearch}
          />
        ) : null}
      </div>
    );
  }
}
