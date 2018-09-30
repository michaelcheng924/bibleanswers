import { ALL_POSTS } from "../constants/posts";
const admin = require("firebase-admin");

const serviceAccount = require("./firestore.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

function updateStore() {
  // DELETE ALL
  var deleteBatch = db.batch();

  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        deleteBatch.delete(doc.ref);
      });

      return deleteBatch.commit().then(() => {
        console.log("DELETED ALL");

        // SET ALL
        ALL_POSTS.forEach(post => {
          db.collection("posts")
            .doc(post.title)
            .set(post);
        });

        console.log("FINISHED");

        return snapshot.size;
      });
    });
}

export { db, updateStore };
