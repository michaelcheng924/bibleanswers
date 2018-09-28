import EXPLAINING from "./explaining";
import DEFENDING from "./defending";
import PROBLEMS from "./problems";
import PRACTICAL from "./practical";

const POSTS_ORGANIZED = [EXPLAINING, DEFENDING, PROBLEMS, PRACTICAL];

const POSTS_ARRAY = POSTS_ORGANIZED.reduce((result, headerData) => {
  headerData.categories.forEach(categoryData => {
    if (categoryData.posts) {
      result = [...result, ...categoryData.posts];
    } else {
      categoryData.subcategories.forEach(subcategoryData => {
        result = [...result, ...subcategoryData.posts];
      });
    }
  });

  return result;
}, []);

const POSTS_BY_MOST_RECENT = POSTS_ARRAY.sort((a, b) => {
  return new Date(b.updated || b.added) - new Date(a.updated || a.added);
});

export { POSTS_ORGANIZED, POSTS_ARRAY, POSTS_BY_MOST_RECENT };
