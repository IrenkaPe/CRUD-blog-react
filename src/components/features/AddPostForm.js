import { Form, Button } from 'react-bootstrap';
import { addPost } from '../../redux/postsRedux';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

const [title, setTitle] = useState('');
const [shortDescription, setShortDescription] = useState('');
const [content, setContent] = useState('');
const [author, setAuthor] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const newPost ={
        title,
        author,
        shortDescription,
        content,
    }
 dispatch(addPost(newPost));
 navigate('/')
}


    return (
        <Form onSubmit ={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required/>
                
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Short Description</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={2}
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    required
                    />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={5}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
                 Add Post
            </Button>
        </Form>    
    )
}
export default AddPostForm