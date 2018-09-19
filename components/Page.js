import React, { Component } from "react";
import Head from "./head";
import Nav from "./nav";

import { ReadingContainer, TitleSection } from "./writing";

class Page extends Component {
  render() {
    const { title, subtitle, content, renderBefore } = this.props;

    return (
      <div>
        <Head title={`${title} | Bible Answers`} description={subtitle} />
        <Nav />

        <TitleSection {...this.props} />

        {renderBefore && renderBefore()}

        <ReadingContainer marginBottom={20}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ReadingContainer>

        <style jsx global>{`
          .writing h3 {
            color: rgba(0, 0, 0, 0.84);
            font-size: 34px;
            line-height: 1.15;
            margin: 0;
            margin-top: 56px;
          }

          .writing p,
          .writing ol,
          .writing blockquote {
            color: rgba(0, 0, 0, 0.84);
            font-size: 21px;
            line-height: 1.58;
            margin: 0;
            margin-top: 29px;
          }

          .writing blockquote {
            font-style: italic;
            margin-left: 20px;
          }

          .writing .first {
            margin-top: 8px;
          }

          .writing img {
            margin-top: 29px;
          }

          .writing img.image-left {
            float: left;
            margin-right: 20px;
          }

          .writing img.image-right {
            float: right;
            margin-left: 20px;
          }

          .writing .link {
            color: #689f38;
            text-decoration: none;
          }

          @media screen and (max-width: 768px) {
            .writing h3 {
              font-size: 30px;
              margin-top: 28px;
            }

            .writing p,
            .writing ol {
              font-size: 18px;
              margin-top: 21px;
            }

            .writing blockquote {
              font-size: 18px;
              margin-top: 21px;
            }

            .writing img {
              margin-top: 21px;
            }
          }

          @media screen and (max-width: 500px) {
            .writing img {
              display: block;
              float: none;
              margin: 0 auto;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Page;
