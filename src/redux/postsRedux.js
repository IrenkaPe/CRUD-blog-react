
//selectors
export const getAllPosts = (state) => state.posts;

export const getPostById = (state, id) => state.posts.find(post => post.id === id)


// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST')
export const removePost = id => ({type: REMOVE_POST, payload:id})

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
        return statePart.filter(post=>post.id!==action.payload)
    default:
      return statePart;
  };
};

export default postsReducer;