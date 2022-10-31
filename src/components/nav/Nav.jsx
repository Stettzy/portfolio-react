import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.svg";
import "./style.css";

const Nav = () => {
    return (
        <header>
            <nav>
                <img src={ Logo } />
                <ul>
                    <li>
                        <Link to="/">About us</Link>
                    </li>
                    <li>
                        <Link to="/our-work">Our work</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;