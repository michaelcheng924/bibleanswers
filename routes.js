const routes = (module.exports = require("next-routes")());

routes.add("post", "/answers/:slug");
routes.add("tag", "/tags/:slug");
routes.add("confession", "/confessions/:slug");

routes.add("sitemap", "/sitemap");
routes.add("privacy-policy", "/privacy-policy");
routes.add("terms-of-service", "/terms-of-service");

routes.add("admin", "/admin");
