import React from "react";
import home1 from '../img/home1.png';

const AboutSection = () => {
    return (
        <div className="about-section-wrapper">
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
        </div>
    )
}

export default AboutSection;