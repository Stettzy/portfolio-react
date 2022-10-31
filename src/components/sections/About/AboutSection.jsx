import React from "react";
// Framer Motion
import { motion } from "framer-motion";
// Animation
import { titleAnimation } from "../../../animation";
// Style
import "./style.css";
// Images
import HeroImage from '../../../img/hero-img.svg';

const AboutSection = () => {
    return (
        <section id="hero">
            <div className="hero-wrapper">
                <div className="hero-left-column">
                    <motion.div className="title">
                        <span className="hide">
                            <motion.h2 variants={ titleAnimation }>We work to make</motion.h2>
                        </span>
                        <span className="hide">
                            <motion.h2 variants={ titleAnimation }>to make <span>your life</span></motion.h2>
                        </span>
                        <span className="hide">
                            <motion.h2 variants={ titleAnimation }>easier.</motion.h2>
                        </span>
                    </motion.div>
                    <div className="description">
                        <p>Contact us to learn more.</p>
                        <button>Contact us</button>
                    </div>
                </div>
                <div className="hero-right-column">
                    <img src={ HeroImage } />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;