import React, { Component } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";

class Search extends Component {
  state = {
    inputFocused: false
  };

  onChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { inputFocused } = this.state;
    const { search, showing, total } = this.props;

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
            onChange={this.onChange}
            onFocus={() => this.setState({ inputFocused: true })}
            onBlur={() => this.setState({ inputFocused: false })}
            placeholder="Search"
            style={{
              borderBottom: inputFocused ? "1px solid #039be5" : ""
            }}
            value={search}
          />
          <div className="results">{`Showing ${showing}/${total} results`}</div>
        </div>
        {search ? (
          <FaTimes
            style={{
              color: "#F44336",
              cursor: "pointer",
              position: "relative",
              top: 5
            }}
            onClick={this.props.onClearSearch}
          />
        ) : null}
      </div>
    );
  }
}

export default Search;
