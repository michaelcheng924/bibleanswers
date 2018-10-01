import App from "../App";
import React from "react";
import bodyParser from "body-parser";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import { keyBy } from "lodash";

import { db, updateStore } from "./db";
import routes from "./routes";
import { getTitleMapping, getTitle } from "../constants/pages";
require("dotenv").config();

// updateStore();

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

function sendResponse(req, res, posts = []) {
  const titleMapping = getTitleMapping(keyBy(posts, "url"));
  const title = getTitle(titleMapping, req.url);

  const context = {};
  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App posts={posts} />
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
        <title>${title}</title>

        <meta name="description" content=${
          titleMapping[req.url] ? titleMapping[req.url].subtitle : ""
        } />

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

          __INITIAL_POSTS__ = ${JSON.stringify(posts)}
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
    db.collection("posts")
      .get()
      .then(snapshot => {
        const posts = snapshot.docs.map(doc => doc.data());

        sendResponse(req, res, posts);
      });
  });

export default server;
