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
}

export default routes;
