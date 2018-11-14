import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  color: rgba(0, 0, 0, 0.84);
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
