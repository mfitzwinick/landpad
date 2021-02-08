import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import likeImg from "../images/heart.png";
import filledLike from "../images/filled-heart.png";
import favImg from "../images/focus.png";
import favedImg from "../images/eye.png";
import API from "../utils/API";


const PostCards = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isFaved, setIsFaved] = useState(false);

    function addLike(){
        setIsLiked(true);
        API.getAddedLikes(props.id).then(res => {console.log(res.data)});
        API.getAddedLiked(props.id).then(res => {console.log(res.data)});
        window.location.reload();
    }

    function removelike(){
        setIsLiked(false);
        API.getRemovedLikes(props.id).then(res => {console.log(res.data)});
        API.getRemovedLiked(props.id).then(res => {console.log(res.data)});
        window.location.reload();
    }

    function addFav(){
        setIsFaved(true);
        API.getAddedFavorites(props.id).then(res => {console.log(res.data)});
        console.log(isFaved);
        window.location.reload();
    }

    function removeFav(){
        setIsFaved(false);
        API.getRemovedFavorites(props.id).then(res => {console.log(res.data)});
        console.log(isFaved);
        window.location.reload();
    }


    useEffect(()=> {
        if(props.favorited) {
            setIsFaved(true);
        } 

        if (props.liked) {
            setIsLiked(true);
        }
    }, [])

    return (
        <div className="whole-card">

        <Card className="post-card">
            <Card.Img className="post-image" variant="top" src={props.image} />
            <Card.Body className="post-body">
                <Card.Title id="title-here">{props.title}</Card.Title>
                    <img id="prof-icon" alt="user's profile image" src={props.profileImage}></img>
                    <p id="username">@{props.username}</p>
                <Card.Text id="post-content">
                    {props.content}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="post-footer">
                <small id="likes-here">{props.likes} LIKES
                { isLiked ? (<img className="like" src={filledLike} alt="heart" onClick={() => removelike()} />) : 
                (<img className="like" src={likeImg} alt="heart" onClick={() => addLike()} />)}

                { isFaved ? (<img className="fav" src={favedImg} alt="wide open eye with lines above" onClick={() => removeFav()} />) : 
                (<img className="fav" src={favImg} alt="eye with focus bars around it" onClick={() => addFav()} />)}
                </small>
            </Card.Footer>
        </Card>
    </div> 
    )
};

export default PostCards;