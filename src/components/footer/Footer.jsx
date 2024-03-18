import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./footer.css"
import Logo from "../../assets/logo.png"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
    return (
        <section id="footer">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="footer-left">
                            <a href="#"><img src={Logo} alt="" /></a>
                            <p>We are always open to discuss your project and improve your online presence.</p>
                            <div className="footer-left-bottom">
                                <div className="footer-left-bottom1">
                                    <h3>Email us at</h3>
                                    <a href="#">contact@website.com</a>
                                </div>
                                <div className="footer-left-bottom2">
                                    <h3>Call us</h3>
                                    <a href="#">0927 6277 28525</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 4, offset: 1 }}>
                        <div className="footer-right">
                            <h2>Lets Talk!</h2>
                            <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                            <div className="fr-icon">
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><LuInstagram /></a>
                                <a href="#"><FaLinkedin /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer