import React from "react";
// Navigation
import Nav from "./components/nav/Nav";
// Pages
import AboutUsPage from "./pages/AboutUs/AboutUs";
import ContactUsPage from "./pages/ContactUs/ContactUs";
import OurWorkPage from "./pages/OurWork/OurWork";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<AboutUsPage />} />
                    <Route path="/our-work" element={<OurWorkPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
