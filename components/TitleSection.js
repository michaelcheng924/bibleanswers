import React from "react";
import styled from "styled-components";
import * as Amp from "react-amphtml";

import Author from "./Author";

const TitleSection = styled.div`
  display: flex;
  margin: 0 65px;

  @media screen and (max-width: 1199px) {
    flex-direction: column;
    margin: 0;
  }
`;

const TitleInfoContainer = styled.div`
  align-items: center;
  display: flex;
  width: calc(50% - 10px);

  @media screen and (max-width: 1199px) {
    margin: 30px auto 0;
    max-width: 740px;
    width: calc(100% - 40px);
  }
`;

const TitleInfo = styled.div`
  margin-left: auto;
  max-width: 552px;

  @media screen and (max-width: 1199px) {
    margin-left: 0;
    max-width: none;
    padding: 0;
    width: 100%;
  }
`;

const TitleText = styled.h1`
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

const Subtitle = styled.div`
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

const CoverImageContainer = styled.div`
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

const Divider = styled.div`
  display: block;
  font-size: 35px;
  letter-spacing: 0.6em;
  text-align: center;
`;

export default ({ title, subtitle, image_url, date_added, user }) => (
  <TitleSection>
    <TitleInfoContainer>
      <TitleInfo>
        <TitleText>{title}</TitleText>
        <Subtitle>{subtitle || "Help us write this article!"}</Subtitle>

        {user ? (
          <Author date_added={date_added} image={user.image} name={user.name} />
        ) : null}

        <Divider>...</Divider>
      </TitleInfo>
    </TitleInfoContainer>
    <CoverImageContainer>
      <StyledAmpImg
        specName="default"
        src={image_url || "https://i.imgur.com/SmPYB60.png"}
        width="1200"
        height="400"
        layout="responsive"
        alt="AMP"
      />
    </CoverImageContainer>
  </TitleSection>
);
