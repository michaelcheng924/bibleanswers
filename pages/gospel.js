import React, { Component } from "react";
import axios from "axios";

import { Heading, Paragraph, ReadingContainer } from "../components/writing";
import Page from "../components/Page";

const uid = "gospel";

class Gospel extends Component {
  state = {
    post: null
  };

  componentWillMount() {
    axios
      .get(`http://bibleanswers-backend.herokuapp.com/api/posts/${uid}`)
      .then(response => {
        this.setState({
          post: response.data.post
        });
      });
  }

  renderBefore() {
    return (
      <ReadingContainer>
        <Heading>Sections</Heading>
        <Paragraph first>
          <a href="#introduction" className="jump-to-section">
            1. Introduction
          </a>
          <a href="#bible" className="jump-to-section">
            2. Bible
          </a>
          <a href="#god" className="jump-to-section">
            3. God
          </a>
          <a href="#sin" className="jump-to-section">
            4. Sin
          </a>
          <a href="#jesus" className="jump-to-section">
            5. Jesus
          </a>
          <a href="#salvation" className="jump-to-section">
            6. Salvation
          </a>
          <a href="#next" className="jump-to-section">
            7. Next Steps
          </a>
        </Paragraph>

        <style jsx>{`
          .jump-to-section {
            color: #689f38;
            display: block;
            text-decoration: none;
          }
        `}</style>
      </ReadingContainer>
    );
  }

  render() {
    const { post } = this.state;

    if (!post) {
      return (
        <div>
          Loading...{" "}
          <style jsx>{`
            div {
              font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
              font-size: 30px;
              margin-top: 50px;
              text-align: center;
            }
          `}</style>
        </div>
      );
    }

    return <Page {...post} renderBefore={this.renderBefore} />;
  }
}

export default Gospel;
