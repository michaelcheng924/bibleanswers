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

export { getTitleMapping };
