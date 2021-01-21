import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import PlaceholderImage from '../images/placeholder-image.png';
import likeImg from "../images/heart.png";
import filledLike from "../images/filled-heart.png";
import favImg from "../images/focus.png";
import favedImg from "../images/eye.png";
import "../styling/UserPost.css";

function UserPost() {

    const [like, setLike] = useState(false);
    const [fav, setFav] = useState(false);

    useEffect(() => {
        setLike(true);
        setFav(true);
      },[]);


     const handleLike = () => {
        const likeIcon = window.document.querySelector(".like"); 
        setLike(!like);
        console.log(like);
        console.log(likeIcon.src);

        if (likeIcon.src){
            likeIcon.src = `${filledLike}`;
            likeIcon.alt = "filled heart"
        } else {
            likeIcon.src=`${likeImg}` 
            likeIcon.alt="heart"
        }
    }

    const handleFav = () => {
        const favIcon = window.document.querySelector(".fav");
        setFav(!fav);
        console.log(fav);
        console.log(favIcon.src);


        if(favIcon){
            favIcon.src = `${favedImg}`;
            favIcon.alt = "wide open eye";
        } 
        
        if (!favIcon){
            favIcon.src= `${favImg}`
            favIcon.alt="eye with focus bars around it"
        }
    }

    return (
        <>
        <div id="side-margins">
            <CardColumns>          
                <div className="whole-card">
                    <Card className="post-card">
                        <Card.Img className="post-image" variant="top" src={PlaceholderImage} />
                        <Card.Body className="post-body">
                            <Card.Title id="title-here">New Listing</Card.Title>
                            <Card.Subtitle id="username-here" className="mb-2 text-muted">@jesscru</Card.Subtitle>
                            <Card.Text id="post-content-here">
                                Check out my new listing! 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="post-footer">
                            <small id="likes-here">3 Likes
                                <img className="like" src={likeImg} alt="heart" onClick={() => handleLike()}></img>
                                <img className="fav" src={favImg} alt="eye with focus bars around it" onClick={() => handleFav()}></img>
                            </small>
                        </Card.Footer>
                    </Card>
                </div> 

                <div className="whole-card">
                    <Card className="post-card">
                        <Card.Img className="post-image" variant="top" src={PlaceholderImage} />
                        <Card.Body className="post-body">
                            <Card.Title id="title-here">New Listing</Card.Title>
                            <Card.Subtitle id="username-here" className="mb-2 text-muted">@jesscru</Card.Subtitle>
                            <Card.Text id="post-content-here">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="post-footer">
                            <small id="likes-here">3 Likes
                                <img className="like" src={likeImg} alt="thumbs up"></img>
                                <img className="fav" src={favImg} alt="binoculars"></img>
                            </small>
                        </Card.Footer>
                    </Card>
                </div> 


                <div className="whole-card">
                    <Card className="post-card">
                        <Card.Img className="post-image" variant="top" src={PlaceholderImage} />
                        <Card.Body className="post-body">
                            <Card.Title id="title-here">New Listing</Card.Title>
                            <Card.Subtitle id="username-here" className="mb-2 text-muted">@jesscru</Card.Subtitle>
                            <Card.Text id="post-content-here">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="post-footer">
                            <small id="likes-here">3 Likes
                                <img className="like" src={likeImg} alt="thumbs up"></img>
                                <img className="fav" src={favImg} alt="binoculars"></img>
                            </small>
                        </Card.Footer>
                    </Card>
                </div> 

                <div className="whole-card">
                    <Card className="post-card">
                        <Card.Img className="post-image" variant="top" src={PlaceholderImage} />
                        <Card.Body className="post-body">
                            <Card.Title id="title-here">New Listing</Card.Title>
                            <Card.Subtitle id="username-here" className="mb-2 text-muted">@jesscru</Card.Subtitle>
                            <Card.Text id="post-content-here">
                                Check out my new listing! 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="post-footer">
                            <small id="likes-here">3 Likes
                                <img className="like" src={likeImg} alt="thumbs up"></img>
                                <img className="fav" src={favImg} alt="binoculars"></img>
                            </small>
                        </Card.Footer>
                    </Card>
                </div>

                <div className="whole-card">
                    <Card className="post-card">
                        <Card.Img className="post-image" variant="top" src={PlaceholderImage} />
                        <Card.Body className="post-body">
                            <Card.Title id="title-here">New Listing</Card.Title>
                            <Card.Subtitle id="username-here" className="mb-2 text-muted">@jesscru</Card.Subtitle>
                            <Card.Text id="post-content-here">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="post-footer">
                            <small id="likes-here">3 Likes
                                <img className="like" src={likeImg} alt="thumbs up"></img>
                                <img className="fav" src={favImg} alt="binoculars"></img>
                            </small>
                        </Card.Footer>
                    </Card>
                </div>

                <div className="whole-card">
                    <Card className="post-card">
                        <Card.Img className="post-image" variant="top" src={PlaceholderImage} />
                        <Card.Body className="post-body">
                            <Card.Title id="title-here">New Listing</Card.Title>
                            <Card.Subtitle id="username-here" className="mb-2 text-muted">@jesscru</Card.Subtitle>
                            <Card.Text id="post-content-here">
                                Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="post-footer">
                            <small id="likes-here">3 Likes
                                <img className="like" src={likeImg} alt="thumbs up"></img>
                                <img className="fav" src={favImg} alt="binoculars"></img>
                            </small>                        
                        </Card.Footer>
                    </Card>
                </div> 
                

                <div className="whole-card">
                    <Card className="post-card">
                        <Card.Img className="post-image" variant="top" src={PlaceholderImage} />
                        <Card.Body className="post-body">
                            <Card.Title id="title-here">New Listing</Card.Title>
                            <Card.Subtitle id="username-here" className="mb-2 text-muted">@jesscru</Card.Subtitle>
                            <Card.Text id="post-content-here">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="post-footer">
                            <small id="likes-here">3 Likes
                                <img className="like" src={likeImg} alt="thumbs up"></img>
                                <img className="fav" src={favImg} alt="binoculars"></img>
                            </small>
                        </Card.Footer>
                    </Card>
                </div>  

                <div className="whole-card">
                    <Card className="post-card">
                        <Card.Img className="post-image" variant="top" src={PlaceholderImage} />
                        <Card.Body className="post-body">
                            <Card.Title id="title-here">New Listing</Card.Title>
                            <Card.Subtitle id="username-here" className="mb-2 text-muted">@jesscru</Card.Subtitle>
                            <Card.Text id="post-content-here">
                                Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="post-footer">
                            <small id="likes-here">3 Likes
                                <img className="like" src={likeImg} alt="thumbs up"></img>
                                <img className="fav" src={favImg} alt="binoculars"></img>
                            </small>
                        </Card.Footer>
                    </Card>
                </div> 


                <div className="whole-card">
                    <Card className="post-card">
                        <Card.Img className="post-image" variant="top" src={PlaceholderImage} />
                        <Card.Body className="post-body">
                            <Card.Title id="title-here">New Listing</Card.Title>
                            <Card.Subtitle id="username-here" className="mb-2 text-muted">@jesscru</Card.Subtitle>
                            <Card.Text id="post-content-here">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="post-footer">
                            <small id="likes-here">3 Likes
                                <img className="like" src={likeImg} alt="thumbs up"></img>
                                <img className="fav" src={favImg} alt="binoculars"></img>
                            </small>
                        </Card.Footer>
                    </Card>
                </div> 

                <div className="whole-card">
                    <Card className="post-card">
                        <Card.Img className="post-image" variant="top" src={PlaceholderImage} />
                        <Card.Body className="post-body">
                            <Card.Title id="title-here">New Listing</Card.Title>
                            <Card.Subtitle id="username-here" className="mb-2 text-muted">@jesscru</Card.Subtitle>
                            <Card.Text id="post-content-here">
                                Check out my new listing! 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="post-footer">
                            <small id="likes-here">3 Likes
                                <img className="like" src={likeImg} alt="thumbs up"></img>
                                <img className="fav" src={favImg} alt="binoculars"></img>
                            </small>
                        </Card.Footer>
                    </Card>
                </div> 
            </CardColumns>
        </div>
    </>
    )
}

export default UserPost;