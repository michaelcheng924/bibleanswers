import React, { Component } from "react";
import axios from "axios";

import Page from "../../components/Page";

const uid = "agnosticism";

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

    return <Page {...post} />;
  }
}

export default Gospel;
