import React from "react";
import { AmpContainer, Container } from "./Container";

const Footer = ({ isAmp }) => {
  const ContainerComponent = isAmp ? AmpContainer : Container;

  return (
    <div
      className="footer"
      style={{
        background: "#01579B",
        justifyContent: "center",
        padding: "10px 20px"
      }}
    >
      <ContainerComponent>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <a
            href="/contact"
            style={{ color: "#fff", marginRight: 20, textDecoration: "none" }}
          >
            Contact
          </a>
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
      </ContainerComponent>
    </div>
  );
};

export default Footer;
