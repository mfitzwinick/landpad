import React, { Component } from "react";
import "../styling/PostForm.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import API from '../utils/API';
import UploadPost from "./UploadPost";


class PostForm extends Component {
   
    state = {
        profileImage: "",
        username: "",
        title: "",
        content: "",
        likes: "",
        liked: "",
        image: "", 
        favorited: "",
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

            profileImage: this.state.profileImage,
            username: this.state.username,
            title: this.state.title,
            content: this.state.content,
            liked: this.state.liked,
            likes: this.state.likes,
            image: this.state.image,
            favorited: this.state.favorited
        }

        API.createPost(data).then(res => {
            document.querySelector(".headline").value = "";
            document.querySelector(".content").value = "";
            console.log(res.data);
            const postID = res.data._id;

            

            API.getProfileImage(localStorage.getItem("id")).then(res => {
                console.log(res.data);
     
                this.setState({ profileImage: res.data.profileImage}, () => { 
                    API.getPosterProfile(postID, { profileImage: this.state.profileImage }).then(res => {
                        console.log(res.data);
                    });
                });
                this.setState({ username: res.data.userName} , () => {
                    API.getPosterUsername(postID, { username: this.state.username }).then(res => {
                        console.log(res.data);
                    });
                })
                       window.location.reload();
            });

             console.log(res);

        });

    }
   

    render(){
        return (
                <div className="post-container">
                    <div className="add-post">
                       
                            <h1 id="add-a-post">ADD A POST</h1>

                            <label className="post-label">ENTER TITLE</label>
                            <InputGroup className="mb-3">
                                <FormControl className="headline"
                                    name="title"
                                    onChange={this.handleInputChange}
                                    value={this.state.title}
                                    placeholder="Post headline"
                                    aria-label="Post headline"
                                    aria-describedby="basic-addon2" />
                            </InputGroup>

                            <label className="post-label">ENTER POST</label>
                            <InputGroup className="mb-3 ">
                                <FormControl as="textarea" className="content"
                                    name="content"
                                    onChange={this.handleInputChange}
                                    value={this.state.content}
                                    placeholder="Share your thoughts"
                                    aria-label="Share your thoughts"
                                    aria-describedby="basic-addon2" />
                            </InputGroup>

                            {/* for cloudinary image upload */}

                            <label className="post-label">FIRST UPLOAD IMAGE</label>
                            <InputGroup className="mb-3 image">
                                <InputGroup.Prepend>
                                   <UploadPost image={this.state.image} handleImage={this.handleImage}/>
                                </InputGroup.Prepend>
                            </InputGroup>

                    </div>

                    <label className="btn-label">NEXT SUBMIT</label>

                    <button type="button" className="form-submit-btn" onClick={this.handleClick}>Submit</button>

                </div>
            );
        }
    }


export default PostForm;