const request = require("request");

request.get("https://bibleanswersapi.herokuapp.com/initialfetch", function(
  err,
  response,
  body
) {
  const parsedBody = JSON.parse(body);

  parsedBody.posts.forEach(post => {
    if (post.published && post.date_added) {
      console.log(`https://bibleanswers.io${post.url}`);
    }
  });
  parsedBody.tags.forEach(tag => {
    if (tag.post_slugs.length) {
      console.log(`https://bibleanswers.io${tag.url}`);
    }
  });
});
