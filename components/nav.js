import React, { Component } from "react";
import Link from "next/link";
import { FaBars, FaChevronLeft, FaHome } from "react-icons/fa";
import Popover from "./Popover";
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
    if (typeof document.body[fn] == "function") {
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

  static defaultProps = {
    home: true
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

    if (!home && !back) {
      return null;
    }

    return (
      <div>
        <Link href={back || "/"}>
          <a className="nav-left">{back ? <FaChevronLeft /> : <FaHome />}</a>
        </Link>

        <style jsx>{`
          .nav-left {
            color: rgba(0, 0, 0, 0.54);
            cursor: pointer;
            font-size: 20px;
          }
        `}</style>
      </div>
    );
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
              <Link href={link.url}>
                <a className={classNames}>{link.label}</a>
              </Link>
            </div>
          );
        })}
        <style jsx>{`
          .popover-link {
            color: rgba(0, 0, 0, 0.54);
            display: block;
            padding: 10px 20px;
            text-decoration: none;
          }

          .active {
            font-weight: bold;
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }

  render() {
    return (
      <nav>
        {this.renderLeft()}

        <Link href="/">
          <a className="app-name">
            <img src="../static/logo.png" className="logo" />
            Bible Answers
          </a>
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

        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          nav {
            align-items: center;
            display: flex;
            height: 65px;
            justify-content: space-between;
            margin: 0 auto;
            max-width: 1040px;
            padding: 0 20px;
          }
          .app-name {
            align-items: center;
            color: #039be5;
            display: flex;
            font-size: 20px;
            font-weight: bold;
            text-decoration: none;
          }
          .logo {
            height: 22px;
            margin-right: 10px;
            width: 32px;
          }
          .nav-right {
            color: rgba(0, 0, 0, 0.54);
            cursor: pointer;
            font-size: 20px;
          }
        `}</style>
      </nav>
    );
  }
}

export default Nav;
