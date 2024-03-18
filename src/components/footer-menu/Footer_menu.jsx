import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer-menu.css"

const Footer_menu = () => {
  return (
    <section id="footer-menu">
      <Container>
        <Row>
          <Col lg={3} sm={12}>
            <div className="fm-left">
              <p>Copyright 2022, Finsweet.com</p>
            </div>
          </Col>
          <Col lg={{ span: 7, offset: 2 }} sm={12}>
            <div className="fm-right">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer_menu
