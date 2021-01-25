import React, { Component } from "react";
import "../styling/PostForm.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import API from '../utils/API';
import UploadPost from "./UploadPost";


class PostForm extends Component {
   
    state = {
        username: "",
        title: "",
        content: "",
        likes: "",
        // id: "",
        image: ""
    };

    componentDidMount() {
        API.getPost();
    };

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        });
    }

    handleImage = (value) => {
        this.setState({
            image: value
        }, () => {
            console.log(this.state.image)
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        
        const data = {
            username: this.state.username,
            title: this.state.title,
            content: this.state.content,
            likes: this.state.likes,
            // id: this.state.id,
            image: this.state.image,
        }

        API.createPost(data).then(res => {
            console.log(res);
        });

        // also need to clear input fields. Vanilla js???        
    }

    render(){
        return (
                <div className="post-container">
                    <div className="add-post">
                        {/* <Card.Body> */}
                            <h1 id="add-a-post">ADD A POST</h1>

                    {/* if we need them to input their username: */}
                            <label className="post-label" htmlFor="basic-url">ENTER USERNAME</label>

                            <InputGroup className="mb-3 username">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="username"
                                    onChange={this.handleInputChange}
                                    value={this.state.username}
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1">
                                </FormControl>

                            </InputGroup>

                            <label className="post-label">ENTER TITLE</label>
                            <InputGroup className="mb-3 headline">
                                <FormControl
                                    name="title"
                                    onChange={this.handleInputChange}
                                    value={this.state.title}
                                    placeholder="Post headline"
                                    aria-label="Post headline"
                                    aria-describedby="basic-addon2" />
                            </InputGroup>

                            <label className="post-label">ENTER POST</label>
                            <InputGroup className="mb-3 content">
                                <FormControl as="textarea"
                                    name="content"
                                    onChange={this.handleInputChange}
                                    value={this.state.content}
                                    placeholder="Share your thoughts"
                                    aria-label="Share your thoughts"
                                    aria-describedby="basic-addon2" />
                            </InputGroup>

                            {/* for cloudinary image upload */}

                            <label className="post-label">UPLOAD IMAGE</label>
                            <InputGroup className="mb-3 image">
                                <InputGroup.Prepend>
                                   <UploadPost profileImage={this.state.image} handleImage={this.handleImage}/>
                                </InputGroup.Prepend>
                                 {/* <form {...this.props.onSubmit} className="form">
                                        <input onChange={this.handleInputChange} value={this.state.image} type="file" name="image"
                                            {...this.props.onChange} {...this.props.value} id="post-image-upload" className="form-input" /> */}
                                        {/* <button className="btn" type="submit">Submit</button> */}
                                    
            {/* ----------------->> ????? what is this? Do I need it????? */}
                                {/* {{...this.props.src} && (
                                        <img {...this.props.src} alt="chosen"
                                            style={{ height: '300px' }} />
                                    )} */}

                                    {/* </form> */}

                            </InputGroup>

                        {/* </Card.Body> */}
                    </div>
                    
                    <button type="button" className="form-submit-btn" onClick={this.handleClick}>Submit</button>

                </div>
            );
        }
    }


export default PostForm;