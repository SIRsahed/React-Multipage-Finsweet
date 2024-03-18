import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./banner.css"
import BannerImg from "../../assets/banner-image.png"

const Banner = () => {
  return (
    <section id='banner'>
    <Container>
        <Row>
            <Col lg={5}>
            <div className="ban-text">
                <h1>Building stellar websites for early startups</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <a href="work.html">View our work</a>
                <a href="pricing.html">View Pricing</a>
            </div>
            </Col>
            <Col lg={{span: 6, offset: 1}}>
                <div className="ban-img">
                    <img src={BannerImg} className='w-100' alt="" />
                </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Banner