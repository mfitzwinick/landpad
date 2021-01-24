import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import likeImg from "../images/heart.png";
import filledLike from "../images/filled-heart.png";
import favImg from "../images/focus.png";
import favedImg from "../images/eye.png";


const CardComponent = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isFaved, setIsFaved] = useState(false);



    return (
        <div className="whole-card">
        <Card className="post-card">
            <Card.Img className="post-image" variant="top" src={props.image} />
            <Card.Body className="post-body">
                <Card.Title id="title-here">{props.title}</Card.Title>
                <Card.Subtitle id="username-here" className="mb-2 text-muted">{props.username}</Card.Subtitle>
                <Card.Text id="post-content-here">
                    {props.content}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="post-footer">
                <small id="likes-here">{props.likes} LIKES
                { isLiked ? (<img className="like" src={filledLike} alt="heart" onClick={() => setIsLiked(false)} />) : 
                (<img className="like" src={likeImg} alt="heart" onClick={() => setIsLiked(true)} />)}

                { isFaved ? (<img className="fav" src={favedImg} alt="wide open eye with lines above" onClick={() => setIsFaved(false)} />) : 
                (<img className="fav" src={favImg} alt="eye with focus bars around it" onClick={() => setIsFaved(true)} />)}
                </small>
            </Card.Footer>
        </Card>
    </div> 
    )
};

export default CardComponent;