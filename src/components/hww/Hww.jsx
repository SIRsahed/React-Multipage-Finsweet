import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./hww.css"
import { FaArrowRightLong } from "react-icons/fa6";
import HwwImg from "../../assets/hww-image.png"

const Hww = () => {
    return (
        <section id="how-we-work">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="hww-left">
                            <h2>How we work</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <a href="#">Get in touch with us <FaArrowRightLong /></a>
                        </div>
                    </Col>
                    <Col lg={{span: 6, offset: 1}}>
                        <Row>
                            <Col lg={6}>
                                <div className="hww-right-item">
                                    <img src={HwwImg} alt="" />
                                    <h3>Strategy</h3>
                                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                            <div className="hww-right-item">
                                    <img src={HwwImg} alt="" />
                                    <h3>Strategy</h3>
                                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                            <div className="hww-right-item">
                                    <img src={HwwImg} alt="" />
                                    <h3>Strategy</h3>
                                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                            <div className="hww-right-item">
                                    <img src={HwwImg} alt="" />
                                    <h3>Strategy</h3>
                                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hww