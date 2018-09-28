import mongoose from "mongoose";

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
);

const postSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  imageUrl: String,
  tags: Array,
  url: String,
  added: String,
  updated: String,
  content: String
});

const Post = mongoose.model("Post", postSchema);

export { Post };
