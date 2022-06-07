import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, Modal } from 'react-bootstrap';
import Comment from '../components/comment';
import './AuthorBlockPage.css';


const AuthorBlockPage = (props) => {
    const params = useParams();
    const [data, setData] = useState({});
    const [comments, setComments] = useState([]);
    const [showComment, setShowComment] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3030/api/authorblock/page', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    author_block_id: params.id
                })
            });
            const json = await response.json();
            setData(json);
        }
        const fetchComments = async () => {
            const response = await fetch('http://localhost:3030/api/authorblock/page/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    author_block_id: params.id
                })
            });
            const json = await response.json();
            setComments(json);
        }
        fetchData();
        fetchComments();
    }, []);

    const handleClick = () => {
        setShowComment(!showComment);
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <div className="media-wrapper">
                {
                    data.video_link ?
                        <iframe src={data.video_link} title="YouTube video player" frameborder="0" allowFullScreen></iframe> :
                        <img src={data.image_link} alt="author" />
                }
            </div>
            <h1>{data.title}</h1>
            <div className="w-50">
                {
                    data.content?.split("\r\n").map((paragraph, index) => {
                        return (
                            <div key={index}>
                                <p>{paragraph}</p>
                                <br />
                            </div>
                        )
                    })
                }
            </div>


            <div className="w-50">
                <div className="d-flex flex-row justify-content-between">
                    <h3>Comments</h3>
                    <Modal.Dialog >
                        <Form.Control type="text" placeholder="請輸入評論..." />
                        <Modal.Footer>
                            <Button onClick={handleClick} variant="secondary">取消</Button>
                            <Button onClick={handleClick} variant="primary">儲存</Button>
                        </Modal.Footer>
                    </Modal.Dialog>

                    <Button hidden={showComment} onClick={handleClick}>Add Comment</Button>
                </div>
                {
                    comments.map((comment, index) => {
                        return <Comment key={index} data={comment} />
                    })
                }
            </div>
        </div>
    );
}

export default AuthorBlockPage;