import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Carousel from '../components/CarouselSlider';
import Modal from "./Modal";
import Jumbotron from '../components/Jumbotron';



  function UserLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
      return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
      event.preventDefault();
    }

    return (
      <div className="Login">
        {/* <Carousel />
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
  
        </Form>         */}
        <Jumbotron />
          {/* <Modal /> */}
      </div>
    );
  };

  export default UserLogin;
