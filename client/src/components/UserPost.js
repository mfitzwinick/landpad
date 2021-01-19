import React from "react"
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import "../styling/UserPost.css";

function UserPost() {
    return (

        <CardColumns>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>New Listing</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">@jesscru</Card.Subtitle>
                    <Card.Text>
                        Check out my new listing! 
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">3 Likes</small>
                </Card.Footer>
            </Card>
            
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>New Listing</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">@jesscru</Card.Subtitle>
                    <Card.Text>
                        Check out my new listing! 
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">3 Likes</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>New Listing</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">@jesscru</Card.Subtitle>
                    <Card.Text>
                        Check out my new listing! 
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">3 Likes</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>New Listing</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">@jesscru</Card.Subtitle>
                    <Card.Text>
                        Check out my new listing! 
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">3 Likes</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>New Listing</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">@jesscru</Card.Subtitle>
                    <Card.Text>
                        Check out my new listing! 
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">3 Likes</small>
                </Card.Footer>
            </Card>
            

        </CardColumns>

    )
}

export default UserPost;