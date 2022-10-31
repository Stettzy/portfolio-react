import React from "react";
import AboutSection from "../../components/sections/About/AboutSection";
import ServicesSection from "../../components/sections/Services/ServicesSection";
import FaqSection from "../../components/sections/Faq/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const AboutUsPage = () => {
    return (
        <motion.div variants={ pageAnimation } initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUsPage;