import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const ContactUsPage = () => {
    return (
        <motion.div variants={ pageAnimation } initial="hidden" animate="show" exit="exit">
            <h1>Contact Us</h1>
        </motion.div>
    )
}

export default ContactUsPage;