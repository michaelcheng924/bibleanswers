import React from "react";
import moment from "moment";
import styled from "styled-components";
import * as Amp from "react-amphtml";

const AmpAuthor = styled.div`
  align-items: center;
  display: flex;
  margin-top: 20px;
  max-width: 500px;
`;

const AmpAuthorInfo = styled.div`
  margin-left: 20px;
`;

const AmpAuthorName = styled.div`
  font-size: 16px;
  margin-bottom: 4px;
`;

const AmpAuthorDate = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 16px;
`;

const StyledAmpImage = styled(Amp.AmpImg)`
  border-radius: 30px;
  flex-shrink: 0;
`;

const AmpAuthorComponent = ({ date_added, image, name }) => (
  <AmpAuthor>
    <StyledAmpImage
      specName="default"
      src={image}
      width="60"
      height="60"
      alt="AMP"
    />
    <AmpAuthorInfo>
      <AmpAuthorName>{name}</AmpAuthorName>
      {date_added ? (
        <AmpAuthorDate>
          {moment(new Date(date_added)).format("MMM Do, YYYY")}
        </AmpAuthorDate>
      ) : (
        <AmpAuthorDate>Not published yet</AmpAuthorDate>
      )}
    </AmpAuthorInfo>
  </AmpAuthor>
);

const AuthorComponent = ({ date_added, image, name }) => {
  return (
    <div className="author">
      <img src={image} className="image" />
      <div className="author-info">
        <div className="author-name">{name}</div>
        {date_added ? (
          <div className="author-date">
            {moment(new Date(date_added)).format("MMM Do, YYYY")}
          </div>
        ) : (
          <div className="author-date">Not published yet</div>
        )}
      </div>

      <style jsx>{`
        .author {
          align-items: center;
          display: flex;
          margin-top: 20px;
          max-width: 500px;
        }

        .author-info {
          margin-left: 20px;
        }

        .author-name {
          font-size: 16px;
          margin-bottom: 4px;
        }

        .author-date {
          color: rgba(0, 0, 0, 0.54);
          font-size: 16px;
        }

        .image {
          border-radius: 30px;
          flex-shrink: 0;
          height: 60px;
          width: 60px;
        }
      `}</style>
    </div>
  );
};

export { AmpAuthorComponent, AuthorComponent };
