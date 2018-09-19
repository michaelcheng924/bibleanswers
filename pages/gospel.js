import React, { Component } from "react";
import axios from "axios";
import Head from "../components/head";
import Nav from "../components/nav";

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
      </ReadingContainer>
    );
  }

  render() {
    const post = this.state;

    if (!post) {
      return "Loading...";
    }

    return <Page {...post} renderBefore={this.renderBefore} />;
  }
}

export default Gospel;
