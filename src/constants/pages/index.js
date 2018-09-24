import { keyBy } from "lodash";

import home from "./home";
import about from "./about";
import { resources, resourcesLearn, resourcesChurchFinders } from "./resources";

import { POSTS_ARRAY } from "../posts";

const POSTS_BY_URL = keyBy(POSTS_ARRAY, "url");

const getPostData = pathname => {
  const splitPathname = pathname;
  return POSTS_BY_URL[splitPathname];
};

const PAGES = {
  "/": home,
  "/about": about,
  "/resources": resources,
  "/resources/learn": resourcesLearn,
  "/resources/church-finders": resourcesChurchFinders,
  ...POSTS_BY_URL
};

export { PAGES, getPostData };
