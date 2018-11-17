import React from "react";
import Container from "./Container";

const Footer = () => (
  <div
    className="footer"
    style={{
      background: "#01579B",
      justifyContent: "center",
      padding: "10px 20px"
    }}
  >
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <a
          href="/privacy-policy"
          style={{ color: "#fff", marginRight: 20, textDecoration: "none" }}
        >
          Privacy
        </a>
        <a
          href="/terms-of-service"
          style={{ color: "#fff", marginRight: 20, textDecoration: "none" }}
        >
          Terms
        </a>
        <a
          href="/sitemap.xml"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Sitemap
        </a>
      </div>
    </Container>
  </div>
);

export default Footer;
