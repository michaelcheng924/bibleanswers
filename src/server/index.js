import App from "../App";
import React from "react";
import bodyParser from "body-parser";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import { find } from "lodash";

// import { db } from "./db";
import routes from "./routes";
import { ALL_POSTS } from "../constants/posts";
import { PAGES } from "../constants/pages";
require("dotenv").config();

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

function sendResponse(req, res, post = {}) {
  const data = PAGES[req.url] || {};

  const context = {};
  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App post={post} />
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(
      `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>${
          data.title
            ? data.title + " | Bible Answers"
            : "Bible Answers: Explaining and Defending the Bible's Teachings"
        }</title>

        <meta name="description" content=${data.description || data.subtitle} />

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="/images/favicon.png" />

        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125895534-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-125895534-1');

          __TEST__ = "TEST"
        </script>

    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
    );
  }
}

const server = express();

server.use(bodyParser.json());

routes(server);

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    if (req.url.indexOf("/answers") !== -1) {
      // const ref = db
      //   .collection("posts")
      //   .where("url", "==", req.url.split("/answers")[1]);

      // ref.get().then(snapshot => {
      //   console.log(snapshot.docs);
      const post = find(
        ALL_POSTS,
        postData => postData.url === req.url.split("/answers")[1]
      );
      sendResponse(req, res, post);
      // });
    } else {
      sendResponse(req, res);
    }
  });

export default server;
