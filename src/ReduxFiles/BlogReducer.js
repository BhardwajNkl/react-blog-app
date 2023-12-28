// getting locally stored posts to initialize state in Redux.
const persistedPosts = localStorage.getItem('react_blog_posts');

const initialState = {
  posts: persistedPosts ? JSON.parse(persistedPosts) : [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.title === action.payload.postId) {
            return action.payload.updatedPost;
          } else {
            return post;
          }
        })
      };

    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.title !== action.payload)
      };

    case 'LIKE_POST':
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.title === action.payload) {
            // Toggle like status
            post.liked = !post.liked;
            return post;
          } else {
            return post;
          }
        })
      };

    default:
      return state;
  }
};

export default blogReducer;
