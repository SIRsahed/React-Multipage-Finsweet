import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./project.css"
import { FaCaretRight } from "react-icons/fa";
import ProjectImg1 from "../../assets/project-img-1.png"
import ProjectImg2 from "../../assets/project-img-2.png"
import ProjectImg3 from "../../assets/project-img-3.png"

const Project = () => {
    return (
        <section id="our-projects">
            <Container>
                <Row>
                    <div className="op-header">
                        <h2>View our projects</h2>
                        <a href="#">View More <FaCaretRight /></a>
                    </div>
                </Row>
                <Row>
                    <Col lg={8}>
                        <div className="op-1">
                            <img src={ProjectImg1} className='w-100' alt="" />
                            <div className="overlay-1">
                                <h2>Workhub office Webflow <br /> Webflow Design</h2>
                                <a href="#">View project <FaCaretRight /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="op-2">
                            <img src={ProjectImg2} alt="" />
                            <div className="overlay-2">
                                <h2>Unisaas Website  <br /> Design</h2>
                                <a href="#">View portfolio <FaCaretRight /></a>
                            </div>
                        </div>
                        <div className="op-2">
                            <img src={ProjectImg3} alt="" />
                            <div className="overlay-2">
                                <h2>Unisaas Website <br/> Design</h2>
                                <a href="#">View portfolio <FaCaretRight /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Project