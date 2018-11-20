import { createGlobalStyle } from "styled-components";

const RESURRECTION_HARMONY_STYLES = `/* RESURRECTION HARMONY */

.resurrection-scripture-container {
  display: flex;
}

.resurrection-scripture {
  flex-grow: 1;
  margin-top: 20px;
  min-width: 320px;
}

.resurrection-scripture-title {
  background: #757575;
  border-right: 1px solid #fff;
  color: #fff;
  padding: 5px 10px;
}

.resurrection-scripture-text {
  border: 1px solid #BDBDBD;
  border-top: 0;
  padding: 5px 10px;
}

.scripture-verse {
  font-size: 13px;
  font-weight: bold;
  position: relative;
  top: -5px;
}

.writing .purple {
  color: #9C27B0;
  font-weight: bold;
}

.writing .red {
  color: #F44336;
  font-weight: bold;
}

.writing .teal {
  color: #009688;
  font-weight: bold;
}

.writing .orange {
  color: #FF5722;
  font-weight: bold;
}

.writing .orange-1 {
  color: #EF6C00;
  font-weight: bold;
}

.writing .blue {
  color: #2196F3;
  font-weight: bold;
}

.writing .indigo {
  color: #3F51B5;
  font-weight: bold;
}

.writing .pink {
  color: #E91E63;
  font-weight: bold;
}

.writing .cyan {
  color: #0097A7;
  font-weight: bold;
}

.writing .green {
  color: #43A047;
  font-weight: bold;
}

.writing .brown {
  color: #795548;
  font-weight: bold;
}`;

function createAmpGlobalStyle(slug) {
  return createGlobalStyle`
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

  ${
    slug === "resurrection-narratives-harmony"
      ? RESURRECTION_HARMONY_STYLES
      : ""
  }
  `;
}

export { createAmpGlobalStyle };
