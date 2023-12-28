const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { posts } = store.getState();
  localStorage.setItem('react_blog_posts', JSON.stringify(posts));
  return result;
};

export default localStorageMiddleware;
