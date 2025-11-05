

import{ useParams, Navigate } from 'react-router-dom';
import { getPostById, removePost } from '../../../redux/postsRedux';
import { useDispatch, useSelector, } from 'react-redux';
import {Button, Card, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useState } from 'react'


const PostPage = () => {

    const { id }= useParams();

    const postData = useSelector(state => getPostById(state, id))
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false)
    const handleDelete = () => {
        dispatch(removePost(id))
    }

    if (!postData) {
    return <Navigate to="/" />
    }

    return (
      <>
        <Card>
            <Card.Body>
                <div className ="d-flex justify-content-between align-items-start mb-3">
                    <Card.Title>{postData.title}</Card.Title>
                    <div>
                        <Button as ={Link} to={`/post/edit/${id}`} variant= "outline-primary" className="me-2">Edit</Button>
                         <Button variant="outline-danger" onClick={() => setShowModal(true)} >Delete</Button>
                    </div>
                </div>
               <Card.Subtitle className="text-muted mb-3">
                    <div className="mb-2"><strong>Author:</strong> {postData.author}</div>
                    <div><strong>Published</strong> {postData.publishedDate}</div>
                </Card.Subtitle>
                <Card.Text>{postData.content}</Card.Text> 
            </Card.Body>
        </Card>
        <Modal show ={showModal} onHide= {() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Usuń post </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you shure?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                Anuluj
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                Potwierdź
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    )
}
export default PostPage