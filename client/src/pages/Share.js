import React, { Component } from "react";
import PostDisplay from "../components/PostDisplay";
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
                    <PostDisplay />
                <Footer />
            </>
        );
    }
}


export default Share;