import App from "./App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";

import bodyParser from "body-parser";
import { PAGES } from "./constants/pages";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb://heroku_xh6ll6gg:t3osessavn6r7dqhjeeis0p810@ds163382.mlab.com:63382/heroku_xh6ll6gg" ||
    process.env.MONGODB_URI,
  { useNewUrlParser: true }
);

var postSchema = new mongoose.Schema({
  uid: String,
  title: String,
  subtitle: String,
  imageUrl: String,
  imagePosition: String,
  tags: Array,
  url: String,
  added: String,
  updated: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

function sendResponse(req, res, result = {}) {
  const data = PAGES[req.url] || {};

  const context = {};
  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App post={result} />
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
        <title>${data.title} | Bible Answers</title>

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

server.get("/api/posts", function(req, res) {
  Post.find({}, (err, posts) => {
    res.send({
      posts
    });
  });
});

server.get("/api/answers/:category/:topic", function(req, res) {
  const { category, topic } = req.params;

  Post.findOne({ url: `/${category}/${topic}` }, (err, post) => {
    res.send({
      post
    });
  });
});

server.post("/api/posts", function(req, res) {
  const post = new Post(req.body);
  post.save(() => {
    res.send({ post });
  });
});

server.patch("/api/posts/:id", function(req, res) {
  Post.update({ _id: req.params.id }, req.body, () => {
    res.send({ success: true });
  });
});

server.delete("/api/post/:id", function(req, res) {
  Post.deleteOne({ _id: req.params.id }, () => {
    res.send({ success: true });
  });
});

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    if (req.url.indexOf("/answers") !== -1) {
      Post.findOne({ url: req.url.split("/answers")[1] }, (err, result) => {
        sendResponse(req, res, result);
      });
    } else {
      sendResponse(req, res);
    }
  });

export default server;
