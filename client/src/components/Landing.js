import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col} from 'react-bootstrap';
import LoginPhoto from "../images/1.png";
import "../styling/Landing.css";
import Modal from "./Modal";
// import Logo from "../images/LogoC2v2B.png";


function Landing(){
    return (
        <Container fluid>
            
            <Row>
                <Col sm={9} className="img-section">
                <img id="photo" variant="top" alt="award winning, modern-looking home" src={LoginPhoto}></img>
                </Col>
                <Col sm={3} className="form-section">
                    {/* <Logo /> */}
                <Form className="auth">
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Button block size="lg" type="submit">
                        LOGIN
                    </Button>
                    <Modal />
                </Form>
                </Col>
            </Row>
                
        </Container>

    );
}

export default Landing;