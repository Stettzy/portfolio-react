import React from "react";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Navigation
import Nav from "./components/Nav";
// Pages
import AboutUsPage from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUs";
import OurWorkPage from "./pages/OurWork";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <GlobalStyles />
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
