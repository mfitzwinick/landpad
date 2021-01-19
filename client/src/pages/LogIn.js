import Button from 'react-bootstrap/Button';
import Post from "../pages/VisionBoard";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function Login() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    )



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
        </Form>
      </div>
    );
  }
}
// @media all and (min-width: 480px) {
//   .Login {
//     padding: 60px 0;
//   }

//   .Login form {
//     margin: 0 auto;
//     max-width: 320px;
//   }
// }




