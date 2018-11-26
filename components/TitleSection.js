import React from "react";
import styled from "styled-components";
import * as Amp from "react-amphtml";

import Author from "./Author";

const AmpTitleSectionContainer = styled.div`
  display: flex;
  margin: 0 65px;

  @media screen and (max-width: 1199px) {
    flex-direction: column;
    margin: 0;
  }
`;

const AmpTitleInfoContainer = styled.div`
  align-items: center;
  display: flex;
  width: calc(50% - 10px);

  @media screen and (max-width: 1199px) {
    margin: 30px auto 0;
    max-width: 740px;
    width: calc(100% - 40px);
  }
`;

const AmpTitleInfo = styled.div`
  margin-left: auto;
  max-width: 552px;

  @media screen and (max-width: 1199px) {
    margin-left: 0;
    max-width: none;
    padding: 0;
    width: 100%;
  }
`;

const AmpTitleText = styled.h1`
  font-size: 56px;
  font-weight: 500;
  line-height: 64px;
  margin: 0;
  margin-bottom: 16px;

  @media screen and (max-width: 1199px) {
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 8px;
  }
`;

const AmpSubtitle = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 23px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 30px;

  @media screen and (max-width: 1199px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
  }
`;

const AmpCoverImageContainer = styled.div`
  align-items: center;
  display: flex;
  margin-left: 20px;
  max-height: 400px;
  overflow: hidden;
  width: calc(50% - 10px);

  @media screen and (max-width: 1199px) {
    margin-left: 0;
    max-height: 500px;
    order: -1;
    width: 100%;
  }
`;

const StyledAmpImg = styled(Amp.AmpImg)`
  background-position: center;
  width: 100%;
`;

const AmpDivider = styled.div`
  display: none;

  @media screen and (max-width: 1199px) {
    display: block;
    font-size: 35px;
    letter-spacing: 0.6em;
    text-align: center;
  }
`;

const AmpTitleSection = ({ title, subtitle, image_url, date_added, user }) => (
  <AmpTitleSectionContainer>
    <AmpTitleInfoContainer>
      <AmpTitleInfo>
        <AmpTitleText>{title}</AmpTitleText>
        <AmpSubtitle>{subtitle || "Help us write this article!"}</AmpSubtitle>

        {user ? (
          <Author date_added={date_added} image={user.image} name={user.name} />
        ) : null}

        <AmpDivider>...</AmpDivider>
      </AmpTitleInfo>
    </AmpTitleInfoContainer>
    <AmpCoverImageContainer>
      <StyledAmpImg
        specName="default"
        src={image_url || "https://i.imgur.com/SmPYB60.png"}
        width="1200"
        height="400"
        layout="responsive"
        alt="AMP"
      />
    </AmpCoverImageContainer>
  </AmpTitleSectionContainer>
);

const TitleSectionContainer = ({ children }) => (
  <div className="title-section">
    {children}
    <style jsx>{`
      .title-section {
        display: flex;
        margin: 0 65px;
      }

      @media screen and (max-width: 1199px) {
        .title-section {
          flex-direction: column;
          margin: 0;
        }
      }
    `}</style>
  </div>
);

const TitleInfoContainer = ({ children }) => (
  <div className="title-info-container">
    {children}
    <style jsx>{`
      .title-info-container {
        align-items: center;
        display: flex;
        width: calc(50% - 10px);
      }

      @media screen and (max-width: 1199px) {
        .title-info-container {
          margin: 30px auto 0;
          max-width: 740px;
          width: calc(100% - 40px);
        }
      }
    `}</style>
  </div>
);

const TitleInfo = ({ children }) => (
  <div className="title-info">
    {children}
    <style jsx>{`
      .title-info {
        margin-left: auto;
        max-width: 552px;
      }

      @media screen and (max-width: 1199px) {
        .title-info {
          margin-left: 0;
          max-width: none;
          padding: 0;
          width: 100%;
        }
      }
    `}</style>
  </div>
);

const TitleText = ({ children }) => (
  <div className="title-text">
    {children}
    <style jsx>{`
      .title-text {
        font-size: 56px;
        font-weight: 500;
        line-height: 64px;
        margin: 0;
        margin-bottom: 16px;
      }

      @media screen and (max-width: 1199px) {
        .title-text {
          font-size: 36px;
          font-weight: 500;
          line-height: 40px;
          margin-bottom: 8px;
        }
      }
    `}</style>
  </div>
);

const Subtitle = ({ children }) => (
  <div className="subtitle">
    {children}
    <style jsx>{`
      .subtitle {
        color: rgba(0, 0, 0, 0.54);
        font-size: 23px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 30px;
      }

      @media screen and (max-width: 1199px) {
        .subtitle {
          font-size: 20px;
          line-height: 24px;
          margin-bottom: 10px;
        }
      }
    `}</style>
  </div>
);

const CoverImageContainer = ({ children }) => (
  <div className="cover-image-container">
    {children}
    <style jsx>{`
      .cover-image-container {
        align-items: center;
        display: flex;
        margin-left: 20px;
        max-height: 400px;
        overflow: hidden;
        width: calc(50% - 10px);
      }

      @media screen and (max-width: 1199px) {
        .cover-image-container {
          margin-left: 0;
          max-height: 500px;
          order: -1;
          width: 100%;
        }
      }
    `}</style>
  </div>
);

const Divider = ({ children }) => (
  <div className="divider">
    {children}
    <style jsx>{`
      .divider {
        display: none;
      }

      @media screen and (max-width: 1199px) {
        .divider {
          display: block;
          font-size: 35px;
          letter-spacing: 0.6em;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

const TitleSection = ({ title, subtitle, image_url, date_added, user }) => {
  return (
    <TitleSectionContainer>
      <TitleInfoContainer>
        <TitleInfo>
          <TitleText>{title}</TitleText>
          <Subtitle>{subtitle || "Help us write this article!"}</Subtitle>

          {user ? (
            <Author
              date_added={date_added}
              image={user.image}
              name={user.name}
            />
          ) : null}

          <Divider>...</Divider>
        </TitleInfo>
      </TitleInfoContainer>
      <CoverImageContainer>
        <img src={image_url} style={{ width: "100%" }} />
      </CoverImageContainer>
    </TitleSectionContainer>
  );
};

export { AmpTitleSection, TitleSection };
