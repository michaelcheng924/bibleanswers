import React, { Component } from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

class Head extends Component {
  componentDidMount() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-125895534-1");
  }

  render() {
    const { title, description, url, ogImage } = this.props;

    return (
      <NextHead>
        <meta charSet="UTF-8" />
        <title>{title || ""}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
        <link rel="apple-touch-icon" href="/static/touch-icon.png" />
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
        <link rel="icon" href="/static/favicon.png" />
        <meta property="og:url" content={url || defaultOGURL} />
        <meta property="og:title" content={title || ""} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
        <meta name="twitter:site" content={url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage || defaultOGImage} />
        <meta property="og:image" content={ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          name="google-site-verification"
          content="PogUvZDNzxJevjFCQGGbb4EwscTEwgdxz1SQSTYJoxU"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-125895534-1"
        />
      </NextHead>
    );
  }
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
