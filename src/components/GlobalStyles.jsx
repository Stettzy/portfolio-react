import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   

    body {
        background: #1b1b1b;
    }

    button {
        font-weight: bold;
        cursor: pointer;
        border: 3px solid #23d997;
        background-color: transparent;
        padding: 15px 25px;
        color: #fff;
        transition: all .5s ease;
        &:hover {
            color: #23d997;
            background: #fff;
        }
    }

    h2 {
        font-weight: 300;
        font-size: 4rem;
    }

    h3 {
        color: #fff;
    }

    h4 {
        font-weight: 700;
    }

    span {
        font-weight: 500;
        color: #23d997;
    }

    a {
        font-size: 1.1rem;
    }

    p {
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.4rem;
    }




`

export default GlobalStyles;
