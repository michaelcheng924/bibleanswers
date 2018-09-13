import React from "react";

const Title = ({ imagePosition, imageUrl, subtitle, title }) => (
  <div className="title-section">
    <div className="title-info-container">
      <div className="title-info">
        <h1>{title}</h1>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>

    <div className="cover-image" />

    <style jsx>{`
      .title-section {
        display: flex;
        margin: 0 65px;
      }

      .title-info-container {
        width: 50%;
      }

      .title-info {
        margin-left: auto;
        max-width: 552px;
        padding: 60px 60px 32px 0;
      }

      h1 {
        color: rgba(0, 0, 0, 0.84);
        font-size: 56px;
        font-weight: 500;
        line-height: 64px;
        margin: 0;
        margin-bottom: 16px;
      }

      .subtitle {
        color: rgba(0, 0, 0, 0.54);
        font-size: 23px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 30px;
      }

      .cover-image {
        background-image: url(${imageUrl});
        background-position: ${imagePosition};
        min-height: 400px;
        width: 50%;
      }

      @media screen and (max-width: 1199px) {
        .title-section {
          flex-direction: column;
          margin: 0;
        }

        .title-info-container {
          margin: 30px auto 0;
          max-width: 740px;
          padding: 0 20px;
          width: 100%;
        }

        .title-info {
          max-width: inherit;
          padding: 0;
        }

        h1 {
          font-size: 36px;
          font-weight: 500;
          line-height: 40px;
          margin-bottom: 8px;
        }

        .subtitle {
          font-size: 20px;
          line-height: 24px;
          margin-bottom: 24px;
        }

        .cover-image {
          min-height: 500px;
          order: -1;
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default Title;
