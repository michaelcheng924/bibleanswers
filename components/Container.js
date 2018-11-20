import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  color: rgba(0, 0, 0, 0.84);
  margin: 0;
  overflow-x: auto;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const AmpContainer = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

const Container = ({ children }) => (
  <div className="container">
    {children}

    <style jsx>{`
      .container {
        color: rgba(0, 0, 0, 0.84);
        margin: 0;
        padding: 0;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
    `}</style>
  </div>
);

export { AmpContainer, Container };
