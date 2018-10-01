import home from "./home";
import about from "./about";
import { resources, resourcesLearn, resourcesChurchFinders } from "./resources";

function getTitleMapping(postsByUrl) {
  return {
    "/": home,
    "/about": about,
    "/resources": resources,
    "/resources/learn": resourcesLearn,
    "/resources/church-finders": resourcesChurchFinders,
    ...postsByUrl
  };
}

function getTitle(titleMapping, pathname) {
  let data = titleMapping[pathname] || titleMapping["/"];
  let title = data.title;

  if (title.indexOf("Bible Answers") === -1) {
    title = `${title} | Bible Answers`;
  }

  return title;
}

export { getTitleMapping, getTitle };
