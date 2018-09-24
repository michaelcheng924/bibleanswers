// GOSPEL
import gospel from "./gospel";

// BIBLE - CONTRADICTIONS
import genesis12Plants from "./defending/bible/contradictions/genesis12Plants";
import problemOfEvil from "./defending/bible/contradictions/problemOfEvil";

// JESUS - EXISTENCE
import lucian from "./defending/jesus/existence/lucian";
import tacitus from "./defending/jesus/existence/tacitus";

// WORLDVIEW - AGNOSTICISM
import agnosticism from "./problems/agnosticism/agnosticism";

const POSTS_ORGANIZED = [
  {
    heading: "Defending the biblical worldview",
    categories: [
      {
        category: "Jesus",
        subcategories: [
          {
            subcategory: "Did Jesus exist?",
            posts: [tacitus, lucian]
          }
        ]
      },
      {
        category: "Bible",
        subcategories: [
          {
            subcategory: "Alleged contradictions",
            posts: [genesis12Plants, problemOfEvil]
          }
        ]
      }
    ]
  },
  {
    heading: "Problems with non-biblical worldviews",
    categories: [
      {
        category: "Agnosticism",
        posts: [agnosticism]
      }
    ]
  },
  {
    heading: "Practical Christian living",
    categories: [
      {
        category: "Resources for sharing the gospel",
        posts: [gospel]
      }
    ]
  }
];

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
