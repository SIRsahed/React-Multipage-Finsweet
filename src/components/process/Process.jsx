import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./process.css"
import Circle from "../../assets/Circle.svg"

const Process = () => {
  return (
    <section id="process">
        <Container>
            <Row className='text-center'>
                <div className="row process-head">
                    <h2>The process we follow</h2>
                </div>
            </Row>
            <Row>
                <Col lg={3}>
                    <div class="process-item">
                        <img src={Circle} alt="" />
                        <h4>-----------------</h4>
                        <h2>Planning</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="process-item">
                        <img src={Circle} alt="" />
                        <h4>-----------------</h4>
                        <h2>Planning</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="process-item">
                        <img src={Circle} alt="" />
                        <h4>-----------------</h4>
                        <h2>Planning</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div class="process-item">
                        <img src={Circle} alt="" />
                        <h4>-----------------</h4>
                        <h2>Planning</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Process