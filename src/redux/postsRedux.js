import shortid from 'shortid';
//selectors
export const getAllPosts = (state) => state.posts;

export const getPostById = (state, id) => state.posts.find(post => post.id === id)


// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST')
const ADD_POST = createActionName('ADD_POST')
const EDIT_POST = createActionName('EDIT_POST')

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

export const editPost = (post) => ({
    type:EDIT_POST, 
    payload:post
  }
)

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
        return statePart.filter(post=>post.id!==action.payload)
    case ADD_POST:
        return [...statePart, action.payload]
    case EDIT_POST:
        return statePart.map(post=>
            post.id === action.payload.id
            ? { ...post, ...action.payload } 
            : post );
            //„Jeśli id bieżącego posta jest równe id posta, który chcemy zaktualizować (action.payload.id),
// to zwróć nowy obiekt, który:
//kopiuje wszystkie istniejące pola starego posta (...post),
//a następnie nadpisuje je polami z action.payload (...action.payload).
//W przeciwnym razie – zwróć oryginalny post bez zmian
    default:
      return statePart;
  };
};

export default postsReducer;