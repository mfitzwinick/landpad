import React, { Component } from "react";
import UserPost from "../components/UserPost";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styling/Share.css";


class Share extends Component {
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
                <Navigation />
                    <UserPost />
                <Footer />
            </>
        );
    }
}


export default Share;