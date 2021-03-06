import React from "react";
import "../styling/Footer.css";
import API from '../utils/API';
import { Link, useHistory } from 'react-router-dom'

// ------ probably not going to look good on the login page and maybe not the vision board either -------


function Footer() {
    const history = useHistory();
    const handleLogout = e => {
        e.preventDefault();
        localStorage.clear();
        API.logout();
        history.push("/")
    }
    return (
        <footer className="footer">
            <p className="footer-text">
                <Link to="/team"> LAND PAD TEAM </Link>
            </p>

            <button id="logout-btn" onClick={handleLogout}>Logout</button>
        </footer>
    );
}

export default Footer;