import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./features.css"
import IconSvg from "../../assets/Icon.svg"
import Feature2 from "../../assets/feature2.png"
import Feature3 from "../../assets/feature3.png"
import Feature4 from "../../assets/feature4.png"
import Feature5 from "../../assets/feature5.png"
import Feature6 from "../../assets/feature6.png"

const Features = () => {
    return (
        <section id="features">
            <Container>
                <Row>
                    <Col lg={{span: 6, offset: 3}}>
                        <div className="featuresheading">
                            <h4>Features</h4>
                            <h2>Design that solves problems, one product at a time</h2>
                        </div>  
                    </Col>              
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="box">
                            <img src={IconSvg} alt="" />
                            <h3>Uses Client First</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="box">
                            <img src={Feature2} alt="" />
                            <h3>Two Free Revision Round</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="box">
                            <img src={Feature3} alt="" />
                            <h3>Template Customization</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="box">
                            <img src={Feature4} alt="" />
                            <h3>24/7 Support</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="box">
                            <img src={Feature5} alt="" />
                            <h3>Quick Delivery</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="box">
                            <img src={Feature6} alt="" />
                            <h3>Hands-on approach</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Features