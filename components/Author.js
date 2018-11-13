import React from "react";
import moment from "moment";
import styled from "styled-components";
import * as Amp from "react-amphtml";

const Author = styled.div`
  align-items: center;
  display: flex;
  margin-top: 20px;
  max-width: 500px;
`;

const AuthorInfo = styled.div`
  margin-left: 20px;
`;

const AuthorName = styled.div`
  font-size: 16px;
  margin-bottom: 4px;
`;

const AuthorDate = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 16px;
`;

const StyledAmpImage = styled(Amp.AmpImg)`
  border-radius: 30px;
  flex-shrink: 0;
`;

export default ({ date_added, image, name }) => (
  <Author>
    <StyledAmpImage
      specName="default"
      src={image}
      width="60"
      height="60"
      alt="AMP"
    />
    {/* <amp-img src={image} height="60" width="60" /> */}
    <AuthorInfo>
      <AuthorName>{name}</AuthorName>
      {date_added ? (
        <AuthorDate>
          {moment(new Date(date_added)).format("MMM Do, YYYY")}
        </AuthorDate>
      ) : (
        <AuthorDate>Not published yet</AuthorDate>
      )}
    </AuthorInfo>
  </Author>
);
