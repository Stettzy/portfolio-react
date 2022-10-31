import React from "react";
import { FaReact, FaRocket, FaCoins, FaCloud } from "react-icons/fa";
// Styles
import './style.css'

const ServicesSection = () => {
    return (
        <section id="services">
            <div className="services-wrapper">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <div className="icon-heading">
                                <FaReact />
                                <h3>Modern</h3>
                            </div>
                            <p>We build solutions with modern top-notch technologies</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <div className="icon-heading">
                                <FaRocket />
                                <h3>Performance</h3>
                            </div>
                            <p>Lightning speed performance & scalable solutions</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <div className="icon-heading">
                                <FaCoins />
                                <h3>Affordable</h3>
                            </div>
                            <p>Price packages calculated uniquely for your needs</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <div className="icon-heading">
                                <FaCloud />
                                <h3>Cloud</h3>
                            </div>
                            <p>Your application can live on our cloud & can be maintained by us - FOR FREE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ServicesSection;