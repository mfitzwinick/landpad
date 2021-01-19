import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <Nav defaultActiveKey="/posts" className="flex-column nav-links">
            <Nav.Link href="/posts">SHARE</Nav.Link>
            <Nav.Link eventKey="financial">FINANCES</Nav.Link>
            <Nav.Link eventKey="vision-board">VISION BOARD</Nav.Link>
            <Nav.Link eventKey="data">LEARN</Nav.Link>
        </Nav>
    );
};

export default Navigation;