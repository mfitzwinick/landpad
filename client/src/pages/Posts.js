import React, { Component } from "react";
// import UserPost from "../../components/UserPost/UserPost";
import Footer from "../components/Footer";
import "../styling/Posts.css";


class Posts extends Component {
    state = {
        posts: [],
        message: "Tell us everything!"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    
  
    handleFormSubmit = event => {
        event.preventDefault();
        this.getPosts();
    };
    
  
    render() {
        return (
            <>
            </>
        );
    }
}


export default Posts;