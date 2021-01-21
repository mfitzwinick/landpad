import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar"
import "../styling/Navigation.css";

const Navigation = () => {
    return (
        <>
            <Navbar className="nav-area">
                <Navbar.Brand href="/">
                    {/* <img src={LoginPhoto2} alt="logo"></img> */}
                </Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item className="location">
                        <Nav.Link href="/posts">SHARE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="location">
                        <Nav.Link href="/vision-board">VISION BOARD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="location">
                        <Nav.Link href="/finances">PLAN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="location">
                        <Nav.Link href="/learn">LEARN</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    );
};

export default Navigation;