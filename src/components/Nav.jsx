import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <Navi>
            <h1>
                <Link id="logo" to="/">Capture</Link>
            </h1>
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
        </Navi>
    );
}

const Navi = styled.nav`
    width: 100%;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    padding: 25px 0;
    font-family: "Lobster", cursive;

    ul {
        max-width: 350px;
        display: flex;
        list-style: none;
        color: #fff;

        li {
            margin: 0 15px;
        }
    }
`;

export default Nav;