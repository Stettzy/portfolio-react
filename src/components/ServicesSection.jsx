import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { Layout, Hide, Description, Image, Cards, Card } from '../styles';

const ServicesSection = () => {
    return (
        <Layout>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficent</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home2" />
            </Image>
        </Layout>
    )
}


export default ServicesSection;