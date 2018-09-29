import apologetics from "./apologetics";
import theology from "./theology";

const POSTS_ORGANIZED = [apologetics, theology];

const ALL_POSTS = POSTS_ORGANIZED.reduce((result, headerData) => {
  headerData.categories.forEach(categoryData => {
    result = [...result, ...categoryData.posts];
  });

  return result;
}, []);

const POSTS_BY_MOST_RECENT = ALL_POSTS.sort((a, b) => {
  return new Date(b.updated || b.added) - new Date(a.updated || a.added);
});

export { POSTS_ORGANIZED, ALL_POSTS, POSTS_BY_MOST_RECENT };
