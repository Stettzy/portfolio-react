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
        color: #fff;
        transition: all .5s ease;
        &:hover {
            color: #23d997;
            background: #fff;
        }
    }
`

export default GlobalStyles;
