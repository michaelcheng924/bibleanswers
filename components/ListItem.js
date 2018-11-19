import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";
import * as Amp from "react-amphtml";

const AmpListItemContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px 20px;
  text-decoration: none;

  &:hover {
    background: #eee;
  }
`;

const AmpListItemTitle = styled.div`
  color: rgba(0, 0, 0, 0.84);
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
`;

const AmpListItemSubtitle = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 16px;
  line-height: 20px;
  margin-top: 5px;
`;

const AmpListItemDate = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  font-style: italic;
  margin-top: 8px;
`;

const AmpAnswerImageContainer = styled.div`
  flex-shrink: 0;
  height: 80px;
  margin-left: 20px;
  overflow: hidden;
  width: 80px;
`;

const StyledAmpImg = styled(Amp.AmpImg)`
  height: 80px;
  position: relative;
`;

class AmpListItem extends Component {
  render() {
    const { date_added, image_url_small, subtitle, title, noAmp } = this.props;

    return (
      <AmpListItemContainer>
        <div>
          <AmpListItemTitle>{title}</AmpListItemTitle>
          <AmpListItemSubtitle>{subtitle}</AmpListItemSubtitle>
          <AmpListItemDate>
            {date_added
              ? moment(new Date(date_added)).format("MMM Do, YYYY")
              : null}
          </AmpListItemDate>
        </div>
        <AmpAnswerImageContainer>
          <StyledAmpImg
            specName="default"
            src={image_url_small}
            width="80"
            height="80"
            alt="AMP"
          />
        </AmpAnswerImageContainer>
      </AmpListItemContainer>
    );
  }
}

const ListItemContainer = ({ children }) => (
  <div className="list-item-container">
    {children}{" "}
    <style jsx>{`
      .list-item-container {
        align-items: center;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        padding: 10px 20px;
        text-decoration: none;
      }

      .list-item-container:hover {
        background: #eee;
      }
    `}</style>
  </div>
);

const ListItemTitle = ({ children }) => (
  <div className="list-item-title">
    {children}{" "}
    <style jsx>{`
      .list-item-title {
        color: rgba(0, 0, 0, 0.84);
        font-size: 20px;
        font-weight: 600;
        line-height: 25px;
      }
    `}</style>
  </div>
);

const ListItemSubtitle = ({ children }) => (
  <div className="list-item-subtitle">
    {children}{" "}
    <style jsx>{`
      .list-item-subtitle {
        color: rgba(0, 0, 0, 0.54);
        font-size: 16px;
        line-height: 20px;
        margin-top: 5px;
      }
    `}</style>
  </div>
);

const ListItemDate = ({ children }) => (
  <div className="list-item-date">
    {children}{" "}
    <style jsx>{`
      .list-item-date {
        color: rgba(0, 0, 0, 0.54);
        font-size: 12px;
        font-style: italic;
        margin-top: 8px;
      }
    `}</style>
  </div>
);

const AnswerImageContainer = ({ children }) => (
  <div className="answer-image-container">
    {children}{" "}
    <style jsx>{`
      .answer-image-container {
        flex-shrink: 0;
        height: 80px;
        margin-left: 20px;
        overflow: hidden;
        width: 80px;
      }
    `}</style>
  </div>
);

class ListItem extends Component {
  render() {
    const { date_added, image_url_small, subtitle, title, noAmp } = this.props;

    return (
      <ListItemContainer>
        <div>
          <ListItemTitle>{title}</ListItemTitle>
          <ListItemSubtitle>{subtitle}</ListItemSubtitle>
          <ListItemDate>
            {date_added
              ? moment(new Date(date_added)).format("MMM Do, YYYY")
              : null}
          </ListItemDate>
        </div>
        <AnswerImageContainer>
          <img
            src={image_url_small}
            alt={title}
            style={{ height: 80, width: 80 }}
          />
        </AnswerImageContainer>
      </ListItemContainer>
    );
  }
}

export { AmpListItem, ListItem };
