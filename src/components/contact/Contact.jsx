import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./contact.css"
import { FaCaretRight } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact-form">
        <Container>
          <Row>
            <Col lg={6} className='p-0'>
              <div className="contact-text">
                <h2>Building stellar websites for early startups</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
              </div>
            </Col>
            <Col lg={6} className='p-0'>
              <div className="contact-item">
                <h2>Send inquiry</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <form action="">
                  <input type="text" placeholder='Your name'/>
                  <input type="email" placeholder='Your email'/>
                  <input type="text" placeholder='Paste your figma design URL'/>
                  <button type='submit'>Send an Inquiry</button>
                </form>
                <a href="#">Get in touch with us <FaCaretRight /></a>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  )
}

export default Contact