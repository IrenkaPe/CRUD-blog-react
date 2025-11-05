import shortid from 'shortid';
//selectors
export const getAllPosts = (state) => state.posts;

export const getPostById = (state, id) => state.posts.find(post => post.id === id)


// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST')
const ADD_POST = createActionName('ADD_POST')

export const removePost = id => ({type: REMOVE_POST, payload:id})

export const addPost = (postData) => {
  const newPost = {
    ...postData,
    id: shortid(), // unikalne ID
    publishedDate: new Date().toISOString().split('T')[0], // np. "2025-11-05"
  };
  return {
    type: ADD_POST,
    payload: newPost,
  };
};


// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
        return statePart.filter(post=>post.id!==action.payload)
    case ADD_POST:
        return [...statePart, action.payload]
    default:
      return statePart;
  };
};

export default postsReducer;