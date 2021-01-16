import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Button></Button>
        </Navbar>
        
    )
}