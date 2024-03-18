import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./what.css"
import Woman from "../../assets/woman.png"

const What = () => {
    return (
        <section id="what">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="wr">
                            <h2>What our clients say about us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed.</p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="wr1">
                            <h3>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                            <div className="me">
                                <img src={Woman} alt="" />
                                <div className="name">
                                     <h5>Jenny Wilson</h5>
                                    <p>Vice President</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default What