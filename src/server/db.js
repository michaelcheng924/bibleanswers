import mongoose from "mongoose";

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_xh6ll6gg:t3osessavn6r7dqhjeeis0p810@ds163382.mlab.com:63382/heroku_xh6ll6gg",
  { useNewUrlParser: true }
);

const postSchema = new mongoose.Schema({
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

const Post = mongoose.model("Post", postSchema);

export { Post };
