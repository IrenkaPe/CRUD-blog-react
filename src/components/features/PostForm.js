import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';



const PostForm = ({
    action,
    actionText,
    title ='',
    author ='',
    publishedDate ='',
    shortDescription ='',
    content ='',
}) => {

    const[formData,setFormData] = useState({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
    })

    const handleChange = (field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    action (formData);
    }



    return (
        <Form onSubmit ={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter title" 
                    value={formData.title}
                    onChange= {handleChange ('title')}
                    required/>
                
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    value={formData.author}
                    onChange={handleChange ('author')}
                    required
                    />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Short Description</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={2}
                    value={formData.shortDescription}
                    onChange={handleChange ('shortDescription')}
                    required
                    />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={5}
                    value={formData.content}
                    onChange={handleChange ('content')}
                    required
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
                 {actionText}
            </Button>
        </Form>    
    )
}

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText:PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    publishedDate: PropTypes.string,
    shortDescription: PropTypes.string,
    content: PropTypes.string,
}

export default PostForm

