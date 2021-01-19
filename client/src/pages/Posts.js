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

    // getPost = () => {
    //     API.getPost(this.state.q)
    //         .then(res =>
    //             this.setState({
    //                 posts: res.data
    //             })
    //         )
    //         .catch(() =>
    //             this.setState({
    //                 posts: [],
    //                 message: "UHHH OHHHH"
    //             })
    //         );
    // };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getPosts();
    };

    // handlePostSave = id => {
    //     const post = this.state.posts.find(post => post.id === id);

    //     API.savePost({
    //         id: post.id,
    //         name: post.userName,
    //         type: post.type,
    //         message: post.message,
    //         like: post.like,
    //         image: post.imageLinks.thumbnail
    //     }).then(() => this.getPosts());
    // };

    render() {
        return (
            <>
            </>
            // <Container>
            //     <Row>
            //         <Col size="md-12">
            //             <Jumbotron>
            //                 <h1 className="text-center">
            //                     <strong>LAND PAD (Post page)</strong>
            //                 </h1>
            //                 <h2 className="text-center">need to figure out input card!</h2>
            //             </Jumbotron>
            //         </Col>
            //         <Col size="md-12">
            //             <Card title="Topic Search" icon="far fa-book">
            //                 <Form
            //                     handleInputChange={this.handleInputChange}
            //                     handleFormSubmit={this.handleFormSubmit}
            //                     q={this.state.q}
            //                 />
            //             </Card>
            //         </Col>
            //     </Row>
            //     <Row>
            //         <Col size="md-12">
            //             <Card title="Results">

            //             </Card>
            //         </Col>
            //     </Row>
            //     <Footer />
            // </Container>
        );
    }
}


export default Posts;