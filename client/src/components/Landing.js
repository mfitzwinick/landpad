import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginPhoto from "../images/1.png"
import "../styling/Jumbotron.css";

// function Jumbotron({ children }) {
//     return <div className="jumbotron mt-4">{children}</div>;
// }
function Landing(){
    return (
        <div>
            <h1 className="logo">LAND PAD</h1>
                <img id="photo" variant="top" alt="award winning, modern-looking home" src={LoginPhoto}></img>
                <Form className="auth">
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Button block size="lg" type="submit">
                        Login
                    </Button>
                </Form>
        </div>
    );
}

export default Landing;