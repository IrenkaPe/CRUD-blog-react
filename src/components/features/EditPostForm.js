import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost , getPostById } from '../../redux/postsRedux';
import PostForm from './PostForm';

const EditPostForm = () => {

    const {id} =useParams()
    const post = useSelector(state=> getPostById(state,id))
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit = (postData) => {
    dispatch(editPost({id, ...postData})); // wysyła dane do Reduxa
    navigate('/');
  };

  return (
  <PostForm 
    action={handleSubmit} 
    actionText="Edit post"
    title = {post.title}
    author ={post.author}
    publishedDate={post.publishedDate}
    shortDescription={post.shortDescription}
    content={post.content}
  />
  )
};

export default EditPostForm;