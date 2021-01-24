import React from "react";
import "../styling/Footer.css";
import { logout } from '../utils/API';
import { useHistory } from 'react-router-dom'

// ------ probably not going to look good on the login page and maybe not the vision board either -------


function Footer() {
    const history = useHistory();
    const handleLogout = e => {
        e.preventDefault();
        localStorage.clear();
        logout();
        history.push("/")
    }
    return (
        <footer className="footer">
            <p className="footer-text">
                <i/> Proudly built by the LAND PAD Development Team
            </p>

            <button id="logout-btn" onClick={handleLogout}>Logout</button>
        </footer>
    );
}

export default Footer;