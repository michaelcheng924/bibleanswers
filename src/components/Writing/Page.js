import React, { Component } from "react";

import { ReadingContainer, TitleSection } from "./index";

class Page extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderBeforeContent() {
    const { beforeContent } = this.props;

    if (!beforeContent) {
      return null;
    }

    return (
      <ReadingContainer>
        <div dangerouslySetInnerHTML={{ __html: beforeContent }} />
      </ReadingContainer>
    );
  }

  render() {
    const { post } = this.props;

    const { content } = post;

    return (
      <div>
        <TitleSection {...post} />

        {this.renderBeforeContent()}

        <ReadingContainer marginBottom={20}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ReadingContainer>
      </div>
    );
  }
}

export default Page;
