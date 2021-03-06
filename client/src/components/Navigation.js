import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar"
import "../styling/Navigation.css";
import MainLogo from "./MainLogo";

const Navigation = () => {
    return (
        <>
            <Navbar className="nav-area">
                <Navbar.Brand href="/">
                    <MainLogo />
                </Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item className="location">
                        <Nav.Link href="/share">SHARE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="location">
                        <Nav.Link href="/vision-board">VISION BOARD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="location">
                        <Nav.Link href="/plan">PLAN</Nav.Link>
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