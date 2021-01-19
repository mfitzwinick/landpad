import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar"
import "../styling/Navigation.css";

const Navigation = () => {
    return (
        <>
            <Navbar className="nav-area">
                <Navbar.Brand href="/">LAND PAD</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/posts">SHARE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/finances">FINANCES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/vision-board">VISON BOARD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Learn">LEARN</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    );
};

export default Navigation;