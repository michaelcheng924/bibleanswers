import { POSTS_ORGANIZED } from "../constants/posts";
const admin = require("firebase-admin");

const serviceAccount = {
  type: process.env.FIRESTORE_TYPE,
  project_id: process.env.FIRESTORE_PROJECT_ID,
  private_key_id: process.env.FIRESTORE_PRIVATE_KEY_ID,
  private_key: process.env.FIRESTORE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: process.env.FIRESTORE_CLIENT_EMAIL,
  client_id: process.env.FIRESTORE_CLIENT_ID,
  auth_uri: process.env.FIRESTORE_AUTH_URI,
  token_uri: process.env.FIRESTORE_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.FIRESTORE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIRESTORE_CLIENT_X509_CERT_URL
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

function updateStore() {
  // DELETE ALL
  const deleteBatch = db.batch();

  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        deleteBatch.delete(doc.ref);
      });

      return deleteBatch.commit().then(() => {
        console.log("DELETED ALL");

        // SET ALL
        const addBatch = db.batch();

        POSTS_ORGANIZED.forEach(root => {
          root.categories.forEach(category => {
            category.posts.forEach((post, index) => {
              const modifiedPost = {
                ...post,
                root,
                category,
                index
              };

              const ref = db.collection("posts").doc(post.title);

              addBatch.set(ref, modifiedPost);
            });
          });
        });

        addBatch.commit().then(() => {
          console.log("FINISHED");
        });

        return snapshot.size;
      });
    });
}

export { db, updateStore };
