const routes = (module.exports = require("next-routes")());

routes.add("post", "/answers/:slug");
routes.add("contradictions", "/contradictions-in-the-bible");
routes.add("tag", "/tags/:slug");
routes.add("confession", "/confessions/:slug");

routes.add("statement-of-faith", "/statement-of-faith", "post");
routes.add("sitemap", "/sitemap");
routes.add("privacy-policy", "/privacy-policy");
routes.add("terms-of-service", "/terms-of-service");
routes.add("contact", "/contact");

routes.add("admin", "/admin");
