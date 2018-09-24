import { keyBy } from "lodash";

// GOSPEL
import gospel from "./gospel";

// BIBLE
import genesis12Plants from "./bible/genesis12Plants";
import problemOfEvil from "./bible/problemOfEvil";

// JESUS
import lucian from "./jesus/lucian";
import tacitus from "./jesus/tacitus";

// WORLDVIEW
import agnosticism from "./worldview/agnosticism";

const POSTS = [
  // GOSPEL
  gospel,

  // BIBLE
  genesis12Plants,
  problemOfEvil,

  // JESUS
  lucian,
  tacitus,

  // WORLDVIEW
  agnosticism
];

const POSTS_BY_URL = keyBy(POSTS, "url");

const getPostData = pathname => {
  const splitPathname = pathname;
  return POSTS_BY_URL[splitPathname];
};

export { POSTS, POSTS_BY_URL, getPostData };
