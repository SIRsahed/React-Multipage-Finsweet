import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./wwa.css"
import WwaImg from "../../assets/wwa-img.png"

const Wwa = () => {
    return (
        <section id="wwa">
            <Container>
                <Row>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div class="wwa-content">
                            <h2>Goal focussed</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div class="wwa-content">
                            <h2>Continuous improvement</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <img src={WwaImg} alt="" className='w-100' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Wwa