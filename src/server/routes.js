import jwt from "jsonwebtoken";

import { ALL_POSTS } from "../constants/posts";
import { Post } from "./db";

function authorize(req, res, next) {
  if (!req.headers.authorization) {
    res.send({
      success: false
    });
  }

  const token = req.headers.authorization.split(" ")[1];

  if (jwt.decode(token, process.env.JWTSECRET)) {
    next();
  } else {
    res.send({
      success: false
    });
  }
}

function routes(server) {
  server.post("/api/admin/login", (req, res) => {
    if (req.body.pw === process.env.PW) {
      const token = jwt.sign(req.body.pw, process.env.JWTSECRET);

      res.send({
        success: true,
        token
      });
    } else {
      res.send({
        success: false
      });
    }
  });

  server.get("/api/admin/posts", (req, res) => {
    Post.find({}, (err, posts) => {
      res.send({
        posts
      });
    });
  });

  server.get("/api/admin/posts/:id", (req, res) => {
    const { id } = req.params;

    Post.findOne({ _id: id }, (err, post) => {
      res.send({
        post
      });
    });
  });

  server.post("/api/admin/updateposts", authorize, (req, res) => {
    Post.deleteMany({}, () => {
      Post.create(ALL_POSTS, err => {
        res.send({
          success: true
        });
      });
    });
  });
}

export default routes;
