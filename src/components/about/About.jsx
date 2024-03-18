import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./about.css"
import AboutImg from "../../assets/abou-img.png"

const About = () => {
  return (
    <section id="about">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="about-text">
                                <h4>About us</h4>
                                <h2>Our designs solve problems</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </Col>
                        <Col lg={{span: 5, offset: 1}}>
                            <div class="about-img">
                                <img src={AboutImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
  )
}

export default About