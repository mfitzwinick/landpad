import React from "react";
import "../styling/PostForm.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
// import Card from "react-bootstrap/Card";



const PostForm = () => {
    return (
        <div className="container">
            <div className="add-post">
                {/* <Card.Body> */}
                    <h1 id="add-a-post">ADD A POST</h1>

            {/* if we need them to input their username: */}
                    <label className="post-label" htmlFor="basic-url">Enter your username</label>

                    <InputGroup className="mb-3 username">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1">
                        </FormControl>

                    </InputGroup>

                    <label className="post-label">Enter a post title</label>
                    <InputGroup className="mb-3 headline">
                        <FormControl
                            placeholder="Post headline"
                            aria-label="Post headline"
                            aria-describedby="basic-addon2" />
                    </InputGroup>

                    <label className="post-label">Enter your post</label>
                    <InputGroup className="mb-3 content">
                        <FormControl as="textarea"
                            placeholder="Share your thoughts"
                            aria-label="Share your thoughts"
                            aria-describedby="basic-addon2" />
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Link (optional)</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Link" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                    </InputGroup>

                    {/* for cloudinary image upload */}

                    <label className="post-label">Upload your image</label>
                    <InputGroup className="mb-3 image">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Upload an Image"
                            aria-label="Upload an Image"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                {/* </Card.Body> */}
            </div>
        </div>
    );
}

export default PostForm;