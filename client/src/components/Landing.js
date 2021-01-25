import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col} from 'react-bootstrap';
import "../styling/Landing.css";
import Modal from "./Modal";
import PageLogo from "../images/1.png";
import API from '../utils/API';
import { useHistory } from 'react-router-dom'
import MainLogo from './MainLogo'



function Landing(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [token, setToken] = useState();
    useEffect(() => {
        if(localStorage.getItem("token")) {
            history.push("/share")
        }
    }, []);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        };
        API.login(data).then(res => {
            const { token } = res.data;
            localStorage.setItem("token", token);
            history.push("/share")
        })
    }
    return (
        <Container fluid>
            
            <Row>
                <Col sm={9} className="img-section">
        <img id="photo" variant="top" alt="award winning, modern-looking home" src={PageLogo}></img>
                </Col>
                <Col sm={3} className="form-section">
                <MainLogo />
                <Form className="auth">
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control onChange={e =>  setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button block size="lg" type="submit" onClick={handleSubmit}>
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