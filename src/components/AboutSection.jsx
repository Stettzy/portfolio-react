import React from "react";
import home1 from '../img/home1.png';
import { Layout, Hide, Description, Image } from '../styles';

const AboutSection = () => {
    return (
        <Layout>
            <div className="left-column">
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>to make <span>your life</span></h2>
                    </Hide>
                    <Hide>
                        <h2>easier.</h2>
                    </Hide>
                </div>
                <Description>
                    <p>Contact us to learn more.</p>
                    <button>Contact us</button>
                </Description>
            </div>
            <Image>
                <img src={home1} alt="home-1"/>
            </Image>
        </Layout>
    )
}

export default AboutSection;