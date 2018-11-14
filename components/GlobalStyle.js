import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.writing h3 {
  font-size: 34px;
  line-height: 1.15;
  margin: 0;
  margin-top: 56px;
}

.writing h4 {
  font-size: 26px;
  line-height: 1.22;
  margin: 0;
  margin-top: 30px;
}

.writing h3 + p,
.writing h3 + ol,
.writing h3 + ul,
.writing h3 + blockquote,
.writing h4 + p,
.writing h4 + ol,
.writing h4 + ul,
.writing h4 + blockquote {
  margin-top: 8px;
}

.writing p,
.writing ol,
.writing ul,
.writing blockquote {
  font-size: 21px;
  line-height: 1.58;
  margin: 0;
  margin-top: 29px;
}

.writing ol,
.writing ul {
  padding: 0 40px;
}

.writing li {
  margin-bottom: 10px;
}

.writing li:last-child {
  margin-bottom: 0;
}

.writing blockquote {
  border-left: 3px solid rgba(0, 0, 0, .84);
  font-style: italic;
  left: -20px;
  padding-left: 20px;
  position: relative;
}

.writing .first {
  margin-top: 8px;
}

.writing .nomargin {
  margin-top: 0;
}

.writing .indent {
  margin-left: 20px;
}

.writing .image {
  margin-top: 29px;
}

.writing .image-left {
  float: left;
  margin-right: 20px;
}

.writing .image-right {
  float: right;
  margin-left: 20px;
}

.writing a {
  color: #689f38;
  text-decoration: none;
}

.writing .scripture {
  color: #039BE5;
}

.writing .reference {
  font-size: 14px;
  margin-left: 2px;
  position: relative;
  top: -5px;
}

@media screen and (max-width: 768px) {
  .writing h3 {
    font-size: 30px;
    margin-top: 28px;
  }

  .writing h4 {
    font-size: 24px;
    margin-top: 22px;
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

  .writing .image {
    margin-top: 21px;
  }
}
`;

export default GlobalStyle;
