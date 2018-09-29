import "./styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { partial } from "lodash";
import css from "classnames";

export default class SearchCategories extends Component {
  renderRoot(label) {
    const { root, setRoot } = this.props;

    const classNames = css("search-category", {
      "search-category__active": label === root
    });

    return (
      <Link to={`/categories/${label}`}>
        <div className={classNames} onClick={partial(setRoot, label)}>
          {label}
        </div>
      </Link>
    );
  }

  render() {
    return (
      <div className="search-categories__container">
        <div className="search-categories__root">
          {this.renderRoot("newest")}
          {this.renderRoot("apologetics")}
          {this.renderRoot("theology")}
        </div>
      </div>
    );
  }
}
