import React from "react"
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import PlaceholderImage from '../images/placeholder-image.png';
import LikeImg from "../images/like.png";
import "../styling/UserPost.css";

function UserPost() {
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
                                <img className="like" src={LikeImg} alt="thumbs up"></img>
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
                                <img className="like" src={LikeImg} alt="thumbs up"></img>
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
                                <img className="like" src={LikeImg} alt="thumbs up"></img>
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
                                <img className="like" src={LikeImg} alt="thumbs up"></img>
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
                                <img className="like" src={LikeImg} alt="thumbs up"></img>
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
                                <img className="like" src={LikeImg} alt="thumbs up"></img>
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
                                <img className="like" src={LikeImg} alt="thumbs up"></img>
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
                                <img className="like" src={LikeImg} alt="thumbs up"></img>
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
                                <img className="like" src={LikeImg} alt="thumbs up"></img>
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
                                <img className="like" src={LikeImg} alt="thumbs up"></img>
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