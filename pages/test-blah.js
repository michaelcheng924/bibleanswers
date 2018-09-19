import React, { Component } from "react";
import axios from "axios";

import html from "../constants/answers/test";
import Page from "../components/Page";

const uid = "gospel";

class PageFinal extends Component {
  state = {
    post: null
  };

  componentWillMount() {
    axios
      .get(`https://bibleanswers-backend.herokuapp.com/api/posts/${uid}`)
      .then(response => this.setState({ post: response.post }));
  }

  render() {
    if (!this.state.post) {
      return null;
    }

    return <Page {...this.state.post} />;
  }
}

export default PageFinal;
