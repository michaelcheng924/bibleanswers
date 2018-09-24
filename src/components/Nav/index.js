import "./styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronLeft, FaHome } from "react-icons/fa";
import Popover from "../Popover";
import css from "classnames";

export function closest(el, selector) {
  var matchesFn;

  // find vendor prefix
  [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector"
  ].some(function(fn) {
    if (typeof document.body[fn] === "function") {
      matchesFn = fn;
      return true;
    }
    return false;
  });

  var parent;

  // traverse parents
  while (el) {
    parent = el.parentElement;
    if (parent && parent[matchesFn](selector)) {
      return parent;
    }
    el = parent;
  }

  return null;
}

const POPOVER_LINKS = [
  {
    label: "Resources",
    url: "/resources"
  },
  {
    label: "About",
    url: "/about"
  }
];

class Nav extends Component {
  state = {
    showMenu: false
  };

  componentDidMount() {
    document.addEventListener("click", this.onDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onDocumentClick);
  }

  onDocumentClick = event => {
    const { onDocumentClick } = this.props;

    if (onDocumentClick) {
      onDocumentClick(event);
    }

    if (
      !event.target.classList.contains("popover-link-container") &&
      !closest(event.target, ".nav-right")
    ) {
      this.setState({ showMenu: false });
    }
  };

  renderLeft() {
    const { back, home } = this.props;

    if (back) {
      return (
        <div>
          <Link className="nav-left" to={back}>
            <div>
              <FaChevronLeft />
            </div>
          </Link>
        </div>
      );
    }

    if (home) {
      return (
        <div>
          <Link className="nav-left" to="/">
            <div>
              <FaHome />
            </div>
          </Link>
        </div>
      );
    }

    return null;
  }

  renderPopoverBody() {
    return (
      <div>
        {POPOVER_LINKS.map(link => {
          const classNames = css("popover-link", {
            active: link.label === this.props.active
          });

          return (
            <div key={link.label} className="popover-link-container">
              <Link className={classNames} to={link.url}>
                <div>{link.label}</div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <nav>
        {this.renderLeft()}

        <Link className="app-name" to="/">
          <img src="/images/logo.png" className="logo" alt="logo" />
          Bible Answers
        </Link>

        <Popover
          isOpen={this.state.showMenu}
          body={this.renderPopoverBody()}
          place="below"
        >
          <div
            className="nav-right"
            onClick={() => this.setState({ showMenu: !this.state.showMenu })}
          >
            <FaBars />
          </div>
        </Popover>
      </nav>
    );
  }
}

export default Nav;
