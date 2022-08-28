import React from "react";
import home1 from '../img/home1.png';
import styled from "styled-components";

const AboutSection = () => {
    return (
        <About>
            <div className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>to make <span>your life</span></h2>
                </div>
                <div className="hide">
                    <h2>easier.</h2>
                </div>
            </div>
            <div className="description">
                <p>Contact us to learn more.</p>
                <button>Contact us</button>
            </div>
            <div className="image">
                <img src={home1} alt="home-1"/>
            </div>
        </About>
    )
}

// Styled components
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 10rem;
    color: #fff;
`;

export default AboutSection;