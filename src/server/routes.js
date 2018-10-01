import fs from "fs";

import { db } from "./db";

function routes(server) {
  server.get("/api/posts", (req, res) => {
    db.collection("posts")
      .get()
      .then(snapshot => {
        const posts = snapshot.docs.map(doc => doc.data());

        res.send({ posts });
      });
  });

  server.post("/api/sitemap", (req, res) => {
    fs.writeFile(`${__dirname}/sitemap.xml`, req.body.sitemap, err => {
      res.send({ success: true });
    });
  });
}

export default routes;
