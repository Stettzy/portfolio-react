import styled from "styled-components";
// Styled components
export const Layout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: #fff;

    .left-column {
        width: 50%;
    }
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: 300;
    }
`;

export const Image = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    overflow: hidden;
    width: 50%;
    img {
        min-width: 80%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;


export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
`;

export const Card = styled.div`
    box-sizing: border-box;
    padding-right: 20px;  
`;
