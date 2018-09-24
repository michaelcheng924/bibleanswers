import home from "./home";
import about from "./about";
import { resources, resourcesLearn, resourcesChurchFinders } from "./resources";

import { POSTS_BY_URL } from "../posts";

const PAGES = {
  "/": home,
  "/about": about,
  "/resources": resources,
  "/resources/learn": resourcesLearn,
  "/resources/church-finders": resourcesChurchFinders,
  ...POSTS_BY_URL
};

export { PAGES };
