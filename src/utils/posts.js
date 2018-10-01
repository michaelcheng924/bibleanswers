function getStructuredPosts(posts) {
  return posts.reduce((result, post) => {
    const { root, category } = post;

    if (!result[root.url]) {
      result[root.url] = {
        heading: root.heading,
        url: root.url,
        categories: {}
      };
    }

    if (!result[root.url].categories[category.url]) {
      result[root.url].categories[category.url] = {
        category: category.category,
        url: category.url,
        posts: []
      };
    }

    result[root.url].categories[category.url].posts[post.index] = post;

    return result;
  }, {});
}

export { getStructuredPosts };
