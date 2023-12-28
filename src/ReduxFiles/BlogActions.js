export const createPost = (post) => {
  // We receive categories as a string. But we need a list of categories. So, we split the string.
  let categoryList = post.categories.length > 0 ? post.categories.split(',') : [];
  post.categories = categoryList;
  return {
    type: 'CREATE_POST',
    payload: post,
  };
};

export const updatePost = (postId, updatedPost) => {
  // We receive categories as a string. But we need a list of categories. So, we split the string.
  let categoryList = updatedPost.categories.length > 0 ? updatedPost.categories.split(',') : [];
  updatedPost.categories = categoryList;
  return {
    type: 'UPDATE_POST',
    payload: { postId, updatedPost },
  };
};

export const deletePost = (postId) => {
  return {
    type: 'DELETE_POST',
    payload: postId,
  };
};

export const likePost = (postId) => {
  return {
    type: 'LIKE_POST',
    payload: postId
  };
};
