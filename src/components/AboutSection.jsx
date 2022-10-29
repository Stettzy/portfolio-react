import React from "react";
import home1 from '../img/home1.png';
import { Layout, Hide, Description, Image } from '../styles';
// Framer Motion
import { motion } from "framer-motion";
// Animation
import { titleAnimation } from "../animation";

const AboutSection = () => {
    return (
        <Layout>
            <div className="left-column">
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={ titleAnimation }>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={ titleAnimation }>to make <span>your life</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={ titleAnimation }>easier.</motion.h2>
                    </Hide>
                </motion.div>
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