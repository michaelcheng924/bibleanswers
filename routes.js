const routes = (module.exports = require("next-routes")());

routes.add("post", "/answers/:slug");
routes.add("tag", "/tags/:slug");

routes.add("export", "/export");
routes.add("sitemap", "/sitemap");

routes.add("admin", "/admin");
