import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import {
  AmpScripts,
  AmpScriptsManager,
  headerBoilerplate
} from "react-amphtml/setup";
import * as Amp from "react-amphtml";

import Nav from "../components/Nav";

const BODY_STYLES = `
  body {
    color: rgba(0, 0, 0, .84);
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ req, renderPage }) {
    const ampScripts = new AmpScripts();
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(
        <AmpScriptsManager ampScripts={ampScripts}>
          <App {...props} />
        </AmpScriptsManager>
      )
    );

    const ampScriptTags = ampScripts.getScriptElements();

    // AMP only allows for 1 style tag, so we need to compbine all the style
    // tags generated by styled-components
    /* eslint-disable react/no-danger */
    const ampStyleTag = (
      <style
        amp-custom=""
        dangerouslySetInnerHTML={{
          __html: sheet
            .getStyleElement()
            .reduce(
              (
                css,
                {
                  props: { dangerouslySetInnerHTML: { __html = "" } = {} } = {}
                } = {}
              ) => `${css}${__html}`,
              ""
            )
        }}
      />
    );
    /* eslint-enable */

    // Get the dynamic `<title />` from the head generated by next.js
    const title = page.head
      .filter(({ type }) => type === "title")
      .slice(0, 1) || <title>ampreact</title>;

    const metaDescription =
      page.head.filter(({ type }) => type === "meta").slice(1, 2) || "";

    return {
      ...page,
      title,
      metaDescription,
      url: req.url,
      ampScriptTags,
      ampStyleTag
    };
  }

  render() {
    const {
      title,
      metaDescription,
      url,
      ampScriptTags,
      ampStyleTag,
      html
    } = this.props;

    /* eslint-disable react/no-danger */
    return (
      <Amp.Html specName="html ⚡ for top-level html" lang="en" amp="amp">
        <head>
          <link rel="icon" href="https://i.imgur.com/lnlvtFf.png" />
          {title}
          {metaDescription}
          {headerBoilerplate(url)}
          {ampScriptTags}
          {ampStyleTag}
        </head>
        <body>
          <Nav isAmp />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </body>
      </Amp.Html>
    );
  }
}
