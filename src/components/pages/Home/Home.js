import { getAllPosts } from '../../../redux/postsRedux'
import { useSelector } from 'react-redux';
import { Card, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = () => {
    const posts = useSelector(getAllPosts)



    return (
        <div>
            <Row className ="align-items-center mb-4 g-8">
                <Col>
                    <h1>All posts</h1>
                </Col>
                <Col className="align-items-center">
                    <Button as={Link} to={"/post/add"} variant= "outline-primary">Add post</Button>
                </Col>
            </Row>


            <Row className="g-4">
                {posts.map(post =>(
                    <Col key = {post.id} md={4}>
                        <Card className="h-100">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Subtitle className="text-muted mb-2">{post.author} {post.publishedDate}</Card.Subtitle>
                                <Card.Text>{post.shortDescription}</Card.Text>
                                <Button as={Link} to={`/post/${post.id}`} variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home