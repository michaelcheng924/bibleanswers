var fs = require("fs");
var request = require("request");

request.get("https://bibleanswersapi.herokuapp.com/export", function(
  err,
  response,
  body
) {
  var parsedBody = JSON.parse(body);

  fs.writeFile(
    "./next.config.js",
    `module.exports = {
    exportPathMap: function() {
      return {
        "/": { page: "/" },
        "/all-posts": { page: "/all-posts" },
        "/posts-in-progress": { page: "/posts-in-progress" },
        "/privacy-policy": { page: "/privacy-policy" },
        "/terms-of-service": { page: "/terms-of-service" },
        "/admin": { page: "/admin" },
        ${parsedBody.posts
          .map(function(post) {
            return `"${
              post.url
            }": { page: "/post", query: { slug: "${post.slug}" } },\n`;
          })
          .concat(
            parsedBody.tags.map(function(tag, index) {
              return `"${
                tag.url
              }": { page: "/tag", query: { slug: "${tag.slug}" } }${index === parsedBody.tags.length - 1 ? "" : ","}\n`;
            })
          )
          .join("")}
      };
    }
  };`,
    function(err) {
      console.log("NEXT.CONFIG.JS FINISHED!");
    }
  );

  const date = new Date().toISOString();

  fs.writeFile(
    "./constants/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

<url>
  <loc>https://bibleanswers.io/</loc>
  <lastmod>${date}</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://bibleanswers.io/all-posts</loc>
  <lastmod>${date}</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://bibleanswers.io/posts-in-progress</loc>
  <lastmod>${date}</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://bibleanswers.io/privacy-policy</loc>
  <lastmod>${date}</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://bibleanswers.io/terms-of-service</loc>
  <lastmod>${date}</lastmod>
  <priority>0.80</priority>
</url>
${parsedBody.posts
      .map(function(post) {
        return `<url>
  <loc>https://bibleanswers.io${post.url}</loc>
  <lastmod>${date}</lastmod>
  <priority>0.80</priority>
</url>
`;
      })
      .join("")}
${parsedBody.tags
      .map(function(tag) {
        return `<url>
  <loc>https://bibleanswers.io${tag.url}</loc>
  <lastmod>${date}</lastmod>
  <priority>0.80</priority>
</url>`;
      })
      .join("")}
    
</urlset>`,
    function(err) {
      console.log("SITEMAP.XML FINISHED!");
    }
  );
});
