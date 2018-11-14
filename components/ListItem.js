import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";
import * as Amp from "react-amphtml";

const ListItemContainer = styled.div`
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

const ListItemTitle = styled.div`
  color: rgba(0, 0, 0, 0.84);
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
`;

const ListItemSubtitle = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 16px;
  line-height: 20px;
  margin-top: 5px;
`;

const ListItemDate = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  font-style: italic;
  margin-top: 8px;
`;

const AnswerImageContainer = styled.div`
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

class ListItem extends Component {
  render() {
    const { date_added, image_url_small, subtitle, title } = this.props;

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
          <StyledAmpImg
            specName="default"
            src={image_url_small}
            width="80"
            height="80"
            alt="AMP"
          />
        </AnswerImageContainer>
      </ListItemContainer>
    );
  }
}

export default ListItem;
